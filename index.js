/** Copyright (c) 2022, FunctionFun
 * Licensed under the MIT license.
 * hexo-summer-soda-block https://github.com/FunctionFun/hexo-summersoda-block.git
 */

hexo.extend.tag.register("pdf", require("./lib/pdf")(hexo));

hexo.extend.tag.register("web", require("./lib/web")(hexo));

hexo.extend.tag.register("music", require("./lib/music")(hexo));

hexo.extend.tag.register("video", require("./lib/video")(hexo));

hexo.extend.tag.register("mk", require("./lib/mk")(hexo), { ends: true });

hexo.extend.filter.register('after_render:html', require("./lib/loadLib")(hexo));