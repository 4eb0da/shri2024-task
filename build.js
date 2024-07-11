const { readFileSync, writeFileSync } = require("fs");
const { join, basename } = require("path");
const { transform } = require("babel-core");

const sourceName = process.argv[2] || "app.jsx";
const targetName = join(__dirname, basename(sourceName, ".jsx") + ".compiled.js");

transformFile(sourceName, targetName);

function transformFile(sourceName, targetName) {
  console.log(`Compiling ${sourceName} to ${targetName}...`);
  const source = readFileSync(sourceName, "utf8");
  const result = transform(source, { presets: ["react", "es2017"], sourceMaps: false });
  writeFileSync(targetName, result.code, "utf8");
}
