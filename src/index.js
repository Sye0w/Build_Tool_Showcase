// Task #2: Create a simple web application with the following features : header,content
import './index.scss';
import headerHtml from './components/header.html';
import contentHtml from './components/content.html';
import footerHtml from './components/footer.html';


document.body.innerHTML = `${headerHtml}${contentHtml}${footerHtml}`;
document.getElementById('tools-list').innerHTML = tools.map(
    tool =>
        
    `
    <li>
        ${_.capitalize(tool.name)}
    </li>`
).join('');
