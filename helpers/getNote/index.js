import getNotes, { Note } from "@/helpers/getNotes"
import renderToString from "next-mdx-remote/render-to-string"
import getComponents from "./getComponents"
import rehypeCustom from "./rehypeCustom"
const rehypePrism = require("@mapbox/rehype-prism")
const { rehypeAccessibleEmojis } = require("rehype-accessible-emojis")

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
      rehypePlugins: [rehypeCustom, rehypeAccessibleEmojis, rehypePrism],
    },
  })
  return { ...note, body }
}
