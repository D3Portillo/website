const centra = require("centra")

/**
 * Returns a base64 png uri, width and height from
 * a provided remote url image file
 * @returns { Promise<{ placeholder: string, width: number, height: number }> }
 */
export default async function getImageMetadata(url = "") {
  const Jimp = eval(`require("jimp")`)
  let placeholder = undefined
  try {
    const result = await centra(url).send()
    const type = result.headers["content-type"] || ""
    if (type.match(/jpg|jpeg|png|gif/gi)) {
      placeholder = result.body
    }
  } catch (e) {}
  if (placeholder) {
    const image = await Jimp.read(placeholder)
    const height = image.getHeight()
    const width = image.getWidth()
    const mime = image.getMIME()
    const placeholderW = 20
    const placeholderMultiplier = placeholderW / width
    const placeholderH = Math.round(height * placeholderMultiplier)
    const resizedImage = await image.resize(placeholderW, placeholderH)
    const content = await resizedImage.getBase64Async(mime)
    return { placeholder: content, width, height }
  }
  return {}
}
