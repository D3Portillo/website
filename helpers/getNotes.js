// import getImageMetadata from "@/helpers/getImageMetadata"
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
 * @returns { Promise<Note[]> }
 */
export default async function getNotes(addBody = false) {
  const ghNotes = await fetchNotesFromGH()
  const notes = await Promise.all(
    ghNotes.map(async (note) => {
      const { created_at, body, labels, title } = note
      const { data: frontmatter, content } = matter(body)
      const { path = "no-path", cover = 0, description = "" } = frontmatter
      const parsedPath = path.replace(/ +/g, "-")
      let coverPlaceholder = 0
      if (cover) {

        // const { placeholder } = await getImageMetadata(cover)
        // coverPlaceholder = placeholder
      }
      return {
        cover,
        coverPlaceholder,
        description,
        path: parsedPath,
        created_at,
        labels,
        body: addBody && content,
        title,
      }
    })
  )
  return notes
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
