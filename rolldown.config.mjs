import ttsc from "@ttsc/unplugin/rolldown";
import path from "node:path";
import { globSync } from "tinyglobby";

export default {
  input: globSync("./src/**/*.ts"),
  external: (id) => !id.startsWith(".") && !path.isAbsolute(id),
  output: {
    dir: "./lib",
    format: "esm",
    sourcemap: true,
    entryFileNames: "[name].mjs",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [ttsc()],
};
