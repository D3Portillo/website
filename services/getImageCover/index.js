const { exec } = require("child_process")
/**
 * Returns a Buffer for a providen text
 * @param { string } text - Text to generate cover for
 * @returns { Promise<Buffer> }
 */
module.exports = async function getImageCover(text = "") {
  exec("node ./services/getImageCover/makeCover", console.error)
  return new Buffer.from([])
}
