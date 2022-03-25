// gpr-hack.js
const { writeFileSync, readFileSync } = require("fs");

const file = readFileSync("./package.json", {
  encoding: "utf-8",
});

const json = JSON.parse(file);

json.name = "@daneeskripter/rstringapi";

writeFileSync("./package.json", JSON.stringify(json, undefined, 2));
