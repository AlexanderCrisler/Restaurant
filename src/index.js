import createHomepageDiv from './homepage';
import createOrderPageDiv from './order';
import createAboutPageDiv from './about';
import navBar from './navbar';

const loadPage = (page) => {
    const mainPage = document.getElementById('content');

    if (document.getElementById("page") != null) {
        mainPage.removeChild(document.getElementById("navBar"))
        mainPage.removeChild(document.getElementById("page"));
    }

    mainPage.append(navBar()); // TODO: Move to load page function and copy once before create page call
    mainPage.append(page());

    const homeBtn = document.getElementById('homeButton');
    const orderBtn = document.getElementById('orderButton');
    const aboutBtn = document.getElementById('aboutButton');

    homeBtn.addEventListener('click', () => {loadPage(createHomepageDiv)});
    orderBtn.addEventListener('click', () => {loadPage(createOrderPageDiv)});
    aboutBtn.addEventListener('click', () => {loadPage(createAboutPageDiv)});
}

const mainPage = document.getElementById('content');
mainPage.append(navBar());
mainPage.append(createHomepageDiv());

const homeBtn = document.getElementById('homeButton');
const orderBtn = document.getElementById('orderButton');
const aboutBtn = document.getElementById('aboutButton');

homeBtn.addEventListener('click', () => {loadPage(createHomepageDiv)});
orderBtn.addEventListener('click', () => {loadPage(createOrderPageDiv)});
aboutBtn.addEventListener('click', () => {loadPage(createAboutPageDiv)});
