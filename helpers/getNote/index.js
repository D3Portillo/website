import getNotes, { Note } from "@/helpers/getNotes"
import getImageMetadata from "@/helpers/getImageMetadata"
import renderToString from "next-mdx-remote/render-to-string"
import getComponents from "./getComponents"
const visit = require("unist-util-visit")
const rehypePrism = require("@mapbox/rehype-prism")
const { rehypeAccessibleEmojis } = require("rehype-accessible-emojis")

function rehypeCustom() {
  return async function transformer(tree) {
    const images = []
    visit(tree, "element", (node) => {
      if (node.tagName === "img") {
        images.push(node)
      }
    })
    for (const node of images) {
      /** @type { HTMLImageElement } */
      const properties = node.properties
      const src = properties.src
      const metadata = await getImageMetadata(src)
      const { placeholder, width, height } = metadata
      properties.width = width
      properties.height = height
      properties.placeholder = placeholder
    }
  }
}

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
