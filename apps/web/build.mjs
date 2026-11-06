import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("public", { recursive: true });
writeFileSync("public/index.html", "<h1>static</h1>");
mkdirSync(".netlify/v1/edge-functions", { recursive: true });
writeFileSync(
  ".netlify/v1/edge-functions/hello.js",
  'export default () => new Response("from edge");\nexport const config = { path: "/edge" };\n',
);
