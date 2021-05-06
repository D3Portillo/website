const { loadImage, createCanvas, registerFont } = require("canvas")
const canvasTxt = require("canvas-txt").default
const width = 1200
const height = 630

/**
 * Prints a base64 cover on console
 * @description
 * Usage: node makeCover "your text"
 */
async function init() {
  const { 2: text } = process.argv
  const THIS_DIR = process.cwd() + "/services/getImageCover"
  registerFont(`${THIS_DIR}/Poppins-Bold.ttf`, {
    family: "Poppins",
  })
  const canvas = createCanvas(width, height)
  const context = canvas.getContext("2d")
  const image = await loadImage(`${THIS_DIR}/[note].png`)
  // Adds the default image background
  context.drawImage(image, 0, 0, width, height)
  canvasTxt.fontSize = 92
  canvasTxt.align = "left"
  canvasTxt.vAlign = "middle"
  canvasTxt.font = "Poppins"
  canvasTxt.lineHeight = 92
  canvasTxt.drawText(context, text, 120, 104, 960, 351)
  const base64 = canvas.toDataURL().replace("data:image/png;base64,", "")
  process.stdout.write(base64)
}

init()
