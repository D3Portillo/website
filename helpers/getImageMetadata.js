const centra = require("centra")
const sharp = require("sharp")
/**
 * Returns a base64 png uri, width and height from
 * a provided remote url image file
 * @returns { Promise<{ placeholder: string, width: number, height: number }> }
 */
export default async function getImageMetadata(url = "") {
  let placeholder = undefined
  try {
    const result = await centra(url).send()
    const type = result.headers["content-type"] || ""
    if (type.match(/jpg|jpeg|png/gi)) {
      placeholder = result.body
    }
  } catch (e) {}
  if (placeholder) {
    const sharpImage = sharp(placeholder)
    const { width, height } = await sharpImage.metadata()
    const placeholderW = 20
    const placeholderMultiplier = placeholderW / width
    const placeholderH = Math.round(height * placeholderMultiplier)
    const buffer = await sharpImage
      .resize(placeholderW, placeholderH)
      .png({ colors: 16 })
      .toBuffer()
    const content = buffer.toString("base64")
    return {
      placeholder: `data:image/png;base64,${content}`,
      width,
      height,
    }
  }
  return {}
}
