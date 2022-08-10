const glob = require("glob");
const fs = require("fs-extra");
const path = require("path");

(async () => {
  const vues = await getFiles("src/views/**/*.vue");
  const mds = await getFiles("docs/**/*.md");
  const target = "public/markdown/";
  let list = vues.map(vue => {
    let componentName = vue.replace("src/views/", "").replace(".vue", "");
    let md = mds.find(md => md.replace("docs/", "").replace(".md", "") == componentName);
    if (md) {
      return {
        vue,
        md,
        componentName
      };
    } else {
      console.log("[info] " + componentName + "组件 没有对应文档");
      return "";
    }
  });
  list.forEach(item => {
    if (item) {
      const { vue, md, componentName } = item;
      let vueContent = fs.readFileSync(vue).toString();
      let mdContent = fs.readFileSync(md).toString();
      let mergeContent = mdContent + "\r\n```html\r\n" + vueContent + "\r```\r\n";
      let filePath = path.join(target, componentName) + ".md";
      let floderpath = path.dirname(filePath)
      if(!fs.existsSync(floderpath)) fs.mkdirSync(floderpath,{ recursive: true })
      fs.writeFileSync(filePath, mergeContent)
      
    }
  });

  function getFiles(params) {
    return new Promise((resolve, reject) => {
      glob(params, {}, function (err, files) {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });
  }
})();
