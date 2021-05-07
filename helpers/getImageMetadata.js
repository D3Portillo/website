const centra = require("centra")
const sharp = require("sharp")

/**
 * Returns a base64 png uri, width and height from
 * a provided remote url image file
 * @returns { Promise<{ placeholder: string, width: number, height: number }> }
 */
export default async function getImageMetadata(url = "") {
  const placeholder = (await centra(url).send()).body
  const sharpImage = sharp(placeholder)
  const { width, height } = await sharpImage.metadata()
  const placeholderW = 20
  const placeholderMultiplier = placeholderW / width
  const placeholderH = Math.round(height * placeholderMultiplier)
  const buffer = await sharpImage
    .resize(placeholderW, placeholderH)
    .png({ force: true, colours: 32 })
    .toBuffer()
  const content = buffer.toString("base64")
  return {
    placeholder: `data:image/png;base64,${content}`,
    width,
    height,
  }
}
