import"./index.scss";import headerHtml from"./components/header.html";import contentHtml from"./components/content.html";import footerHtml from"./components/footer.html";document.body.innerHTML="".concat(headerHtml).concat(contentHtml).concat(footerHtml);import _ from"lodash";import tools from"/public/assets/data/build-tools";document.getElementById("tools-list").innerHTML=tools.map((function(t){return"\n    <li style=\"background-image:url('".concat(t.image,"')\">\n        <h4>").concat(_.capitalize(t.name),"</h4>\n        <span>").concat(t.desc,'</span>\n        <span><a href="').concat(t.link,'" target="_blank">').concat(t.link,"</a></span>\n    </li>")})).join("");