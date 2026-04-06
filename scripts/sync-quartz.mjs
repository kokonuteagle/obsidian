import path from "node:path"
import {
  CONTENT_DIR,
  ENGINE_DIR,
  OVERRIDES_DIR,
  copyRecursive,
  ensureDir,
  exists,
  removeDir,
} from "./common.mjs"

if (!exists(ENGINE_DIR)) {
  throw new Error(
    "Quartz engine not found. Run `npm run bootstrap` first so the Quartz engine can be cloned locally."
  )
}

const targetContent = path.join(ENGINE_DIR, "content")
removeDir(targetContent)
copyRecursive(CONTENT_DIR, targetContent)

const targetConfig = path.join(ENGINE_DIR, "quartz.config.ts")
const targetLayout = path.join(ENGINE_DIR, "quartz.layout.ts")
const targetCustomScss = path.join(ENGINE_DIR, "quartz", "styles", "custom.scss")

copyRecursive(path.join(OVERRIDES_DIR, "quartz.config.ts"), targetConfig)
copyRecursive(path.join(OVERRIDES_DIR, "quartz.layout.ts"), targetLayout)
ensureDir(path.dirname(targetCustomScss))
copyRecursive(path.join(OVERRIDES_DIR, "quartz", "styles", "custom.scss"), targetCustomScss)

console.log("Quartz sync complete.")
