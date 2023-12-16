import { $s, rm, script } from "isaacscript-common-node";
import path from "node:path";

await script(({ packageRoot }) => {
  const docsPath = path.join(packageRoot, "docs");
  rm(docsPath);
  $s`typedoc ./src/index.ts`;
});
