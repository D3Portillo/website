import { createCanvas, loadImage, registerFont } from "canvas"
import canvasTxt from "canvas-txt"
const width = 1200
const height = 630

/**
 * Returns a Buffer for a providen text
 * @param { string } text - Text to generate cover for
 * @returns { Promise<Buffer> }
 */
export default async function getImageCover(text = "") {
  registerFont("./services/getImageCover/Poppins-Bold.ttf", {
    family: "Poppins",
  })
  const canvas = createCanvas(width, height)
  const context = canvas.getContext("2d")
  const image = await loadImage("./services/getImageCover/[note].png")
  // Adds the default image background
  context.drawImage(image, 0, 0, width, height)
  canvasTxt.fontSize = 92
  canvasTxt.align = "left"
  canvasTxt.vAlign = "middle"
  canvasTxt.font = "Poppins"
  canvasTxt.lineHeight = 92
  canvasTxt.drawText(context, text, 120, 104, 960, 351)
  return canvas.toBuffer("image/png")
}
