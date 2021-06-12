const { exec } = require("child_process")

/**
 * Returns a Buffer for a providen text
 * @param { string } text - Text to generate cover for
 * @returns { Promise<Buffer> }
 */
export default async function getImageCover(text = "") {
  const coverGenPath = process.cwd() + "/helpers/getImageCover/makeCover.js"
  const base64 = await new Promise((resolve) => {
    exec(`node ${coverGenPath} "${text}"`, (error, base64) => {
      console.error({ error })
      resolve(error ? "" : base64)
    })
  })

  return Buffer.from(base64, "base64")
}
