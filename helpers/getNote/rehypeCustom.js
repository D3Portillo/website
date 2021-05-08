import getImageMetadata from "@/helpers/getImageMetadata"
const visit = require("unist-util-visit")

export default function rehypeCustom() {
  return transformer
  async function transformer(tree) {
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
