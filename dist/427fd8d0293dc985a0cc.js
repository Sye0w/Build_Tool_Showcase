import"./index.scss";import headerHtml from"./components/header.html";import contentHtml from"./components/content.html";import footerHtml from"./components/footer.html";document.body.innerHTML="".concat(headerHtml).concat(contentHtml).concat(footerHtml);import _ from"lodash";import tools from"./assets/data/build-tools";document.getElementById("tools-list").innerHTML=tools.map((function(t){return"\n    <li>\n        ".concat(_.capitalize(t.name),"\n    </li>")})).join("");