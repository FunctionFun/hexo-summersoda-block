const util = require('hexo-util');

module.exports = (hexo) => {
  return (loadLibFn = (content) => {
    const htmlTags = `${util.htmlTag('script', {src: 'https://cdn.jsdelivr.net/npm/d3@6'}, '')}
                      ${util.htmlTag('script', {src: 'https://cdn.jsdelivr.net/npm/markmap-view'}, '')}
                     `;
    const themeCfg = hexo?.theme?.config;
    let initFun = `<script>
      const { markmap } = window;
      const { Markmap } = markmap;
      $(function () {
        document.querySelectorAll("svg.markmap").forEach((e) => {
          Markmap.create(e, null, JSON.parse(e.getAttribute("data-mk")));
        });
      });
    </script>`;
    if (themeCfg.pjax.enable) {
      initFun = initFun + `<script>
      $(document).on("pjax:complete", function () {
        document.querySelectorAll("svg.markmap").forEach((e) => {
          Markmap.create(e, null, JSON.parse(e.getAttribute("data-mk")));
        });
      });
      </script>`;
    }


    const lastIndex = content.lastIndexOf('</body>');
    return content.substring(0, lastIndex) + htmlTags + initFun + content.substring(lastIndex, content.length);
  });
};