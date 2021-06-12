import { mkdirSync, writeFileSync } from "fs"
import { dirname } from "path"
const GENERATED_CONTENT = "GENERATED_CONTENT"

/**
 * Adds content to `public` folder and returns remote path
 * without hostname. PD: if content is a file do please
 * provide the extension, ex: item.png
 * @param {{ path: string, content: Buffer }} prop
 */
export default async function addBufferToFs({ path = "/", content = "" }) {
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
