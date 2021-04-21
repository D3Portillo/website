import getNotes, { Note } from "@/services/getNotes"
import renderToString from "next-mdx-remote/render-to-string"
import getComponents from "./getComponents"

/**
 * @returns { Promise<Note> }
 */
export default async function getNote(path = "") {
  const allNotes = await getNotes(true)
  const note = allNotes.find((note) => {
    return note.path === path
  })
  const { renderedOutput: body } = await renderToString(note.body, {
    components: getComponents(),
  })
  return { ...note, body }
}
