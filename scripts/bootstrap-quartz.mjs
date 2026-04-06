import path from "node:path"
import { ENGINE_DIR, ROOT, exists, run } from "./common.mjs"

const QUARTZ_REPO = process.env.QUARTZ_REPO ?? "https://github.com/jackyzha0/quartz.git"
const QUARTZ_BRANCH = process.env.QUARTZ_BRANCH ?? "v4"
const FORCE_INSTALL = process.env.QUARTZ_FORCE_INSTALL === "1"

if (!exists(ENGINE_DIR)) {
  console.log(`Cloning Quartz (${QUARTZ_BRANCH}) into ${ENGINE_DIR}`)
  run("git", ["clone", "--depth", "1", "--branch", QUARTZ_BRANCH, QUARTZ_REPO, ENGINE_DIR], {
    cwd: ROOT,
  })
} else {
  console.log(`Quartz engine already present at ${ENGINE_DIR}`)
}

const nodeModulesDir = path.join(ENGINE_DIR, "node_modules")
if (!exists(nodeModulesDir) || FORCE_INSTALL) {
  console.log("Installing Quartz dependencies with npm ci")
  run("npm", ["ci"], { cwd: ENGINE_DIR })
} else {
  console.log("Quartz dependencies already installed. Skipping npm ci.")
}

console.log("Quartz bootstrap complete.")
