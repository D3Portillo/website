const { exec } = require("child_process")

/**
 * Returns a Buffer for a providen text
 * @param { string } text - Text to generate cover for
 * @returns { Promise<Buffer> }
 */
export default async function getImageCover(text = "") {
  const base64 = await new Promise((resolve) => {
    exec(
      `node ./helpers/getImageCover/makeCover "${text}"`,
      (error, base64) => {
        if (error) resolve("")
        else resolve(base64)
      }
    )
  })

  return Buffer.from(base64, "base64")
}
