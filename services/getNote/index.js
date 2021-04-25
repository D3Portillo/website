import getNotes, { Note } from "@/services/getNotes"
import renderToString from "next-mdx-remote/render-to-string"
import getComponents from "./getComponents"
const rehypePrism = require("@mapbox/rehype-prism")

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
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  })
  return { ...note, body }
}
