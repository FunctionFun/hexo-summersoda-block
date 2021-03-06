/** Copyright (c) 2022, FunctionFun
 * Licensed under the MIT license.
 * hexo-summer-soda-block https://github.com/FunctionFun/hexo-summersoda-block.git
 */

const ejs = require("ejs");
const path = require("path");
const fs = require("hexo-fs");

module.exports = (hexo) => {
  const templateSrc = path.join(__dirname, "block.ejs");
  const template = ejs.compile(fs.readFileSync(templateSrc));
  return (pdfFn = (args) => {
    const [pdfLink, height] = args;
    let type = "file";
    if (pdfLink.indexOf(".pdf") > 0) {
      type = "file";
    } else {
      type = "pdf";
    }
    return template({ src: pdfLink, type: type, height: height || 300 });
  });
};
