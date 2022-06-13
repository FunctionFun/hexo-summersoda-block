/** Copyright (c) 2022, FunctionFun
 * Licensed under the MIT license.
 * hexo-summer-soda-block https://github.com/FunctionFun/hexo-summersoda-block.git
 */

const ejs = require("ejs");
const path = require("path");
const fs = require("hexo-fs");
const { Transformer } = require("markmap-lib");
const transformer = new Transformer();

module.exports = (hexo) => {
  const templateSrc = path.join(__dirname, "block.ejs");
  const template = ejs.compile(fs.readFileSync(templateSrc));
  return (mkFn = (args, content) => {
    const [height] = args;
    const { root } = transformer.transform(content);
    const mkContent = escapeData(JSON.stringify(root));
    return template({ mkContent, type: "mk", height: height || 300 });
  });
};

function escapeData(s) {
  return !s
    ? ""
    : s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\'/g, "&#39;")
        .replace(/\"/g, "&quot;");
}
