import { spawnSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export const ROOT = path.resolve(__dirname, "..")
export const ENGINE_DIR = path.join(ROOT, ".quartz-engine")
export const CONTENT_DIR = path.join(ROOT, "content")
export const OVERRIDES_DIR = path.join(ROOT, "quartz-overrides")

export function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? ROOT,
    stdio: "inherit",
    shell: process.platform === "win32",
    env: { ...process.env, ...(options.env ?? {}) },
  })

  if (result.status !== 0) {
    throw new Error(`Command failed: ${command} ${args.join(" ")}`)
  }
}

export function exists(p) {
  return fs.existsSync(p)
}

export function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}

export function removeDir(p) {
  if (exists(p)) {
    fs.rmSync(p, { recursive: true, force: true })
  }
}

export function copyRecursive(src, dest) {
  const stats = fs.statSync(src)
  if (stats.isDirectory()) {
    ensureDir(dest)
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry))
    }
    return
  }

  ensureDir(path.dirname(dest))
  fs.copyFileSync(src, dest)
}
