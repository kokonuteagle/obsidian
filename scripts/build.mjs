import { ENGINE_DIR, run } from "./common.mjs"
import "./bootstrap-quartz.mjs"
import "./sync-quartz.mjs"

run("npx", ["quartz", "build"], { cwd: ENGINE_DIR })
