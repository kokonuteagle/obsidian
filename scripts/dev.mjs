import { ENGINE_DIR, run } from "./common.mjs"
import "./bootstrap-quartz.mjs"
import "./sync-quartz.mjs"

run("npx", ["quartz", "build", "--serve"], { cwd: ENGINE_DIR })
