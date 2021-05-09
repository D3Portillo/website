import getImageMetadata from "@/helpers/getImageMetadata"
import matter from "gray-matter"
import { Octokit } from "@octokit/rest"
const { GH_TOKEN } = process.env
const REPO_NAME = "website-2"
const READY_TAG = "ready-to-publish"
const kit = new Octokit({ auth: GH_TOKEN })
/**
 * @typedef Note
 * @property { string } body
 * @property { string } created_at
 * @property { string[] } labels
 * @property { string } title
 * @property { string } path
 * @property { string } cover
 * @property { string } description
 * @property { string? } coverPlaceholder
 */

/**
 * @param { Object } opt
 * @param { boolean } opt.matterOnly - If true returns only notes frontmatter
 * @param { string } opt.queryByPath - note path to fetch/filter from all notes
 * @returns { Promise<Note[]> }
 */
export default async function getNotes(opt = {}) {
  const ghNotes = await fetchNotesFromGH()
  let notes = ghNotes.map(getNotesMatter)
  if (opt.queryByPath) {
    notes = notes.filter((note) => {
      return note.path === opt.queryByPath
    })
  }
  if (opt.matterOnly) {
    return notes.map((note) => {
      return {
        ...note,
        body: null,
      }
    })
  }
  return await Promise.all(notes.map(getFullNotesContent))
}

function getNotesMatter(note) {
  const { created_at, body, labels, title } = note
  const { data: frontmatter } = matter(body)
  const { path = "no-path", cover = 0, description = "" } = frontmatter
  const parsedPath = path.replace(/ +/g, "-")
  return {
    cover,
    description,
    path: parsedPath,
    created_at,
    labels,
    title,
    body,
  }
}

async function getFullNotesContent(note) {
  const { cover, body } = note
  const { content } = matter(body)
  let coverPlaceholder = 0
  if (cover) {
    const { placeholder } = await getImageMetadata(cover)
    coverPlaceholder = placeholder
  }
  return {
    ...note,
    coverPlaceholder,
    body: content,
  }
}

/**
 * @returns { Promise<[{ created_at, body, labels, title }]> }
 */
function fetchNotesFromGH() {
  const issues = new Promise((resolve) => {
    kit.issues
      .listForRepo({
        owner: "D3Portillo",
        repo: REPO_NAME,
        state: "closed",
        labels: READY_TAG,
        sort: "created",
      })
      .then(({ data }) => resolve(data))
      .catch(() => resolve([]))
  })
  return issues.then((arr) => {
    return Promise.all(
      arr.map((issue) => {
        // publish date is `closed_at`
        const { closed_at: created_at, body, labels: ghLabels, title } = issue
        const labels = ghLabels
          .map(({ name }) => name)
          .filter((name) => name !== READY_TAG)
        return { created_at, body, labels, title }
      })
    )
  })
}

/** @type { Note } */
export const Note = {}
