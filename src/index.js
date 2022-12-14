import createHomepageDiv from './homepage.js';
import createAboutPageDiv from './about.js';
import createOrderPageDiv from './order.js';

const createPage = (createFunc) => {
    let mainPage = document.getElementById('content');

    if (document.getElementById("page") != null) {
        mainPage.removeChild(document.getElementById("page"));
    }
    mainPage.append(createFunc());

    const homeButton = document.getElementById("homeButton");
    const orderButton = document.getElementById("orderButton");
    const aboutButton = document.getElementById("aboutButton");

    homeButton.onclick = (createHomepageDiv) => { createPage(createHomepageDiv); };
    orderButton.onclick = (createOrderPageDiv) => { createPage(createOrderPageDiv); };
    aboutButton.onclick = (createAboutPageDiv) => { createPage(createAboutPageDiv); };
}

createPage(createHomepageDiv);