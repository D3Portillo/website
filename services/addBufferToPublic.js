import { mkdirSync, writeFileSync } from "fs"
import { dirname } from "path"
const GENERATED_CONTENT = "GENERATED_CONTENT"

/**
 * Adds content to `public` folder and returns remote path
 * without hostname :: Add extension, item.png
 * @param {{ path: string, content: Buffer }} prop
 */
export default async function addBufferToPublic({ path = "/", content = "" }) {
  const cwd = process.cwd()
  const remotePath = `/${GENERATED_CONTENT}${path}`
  const destPath = `${cwd}/public${remotePath}`
  const pathDir = dirname(destPath)
  try {
    mkdirSync(pathDir, { recursive: true })
  } catch (_) {}
  writeFileSync(destPath, content)
  return remotePath
}
