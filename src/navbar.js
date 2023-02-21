const navBar = () => {
    const navBar = document.createElement('nav');
    const homeButton = document.createElement('button');
    const orderButton = document.createElement('button');
    const aboutButton = document.createElement('button');
    
    homeButton.innerHTML = 'Home';
    orderButton.innerHTML = 'Order';
    aboutButton.innerHTML = 'About';

    homeButton.id = 'homeButton';
    orderButton.id = 'orderButton';
    aboutButton.id = 'aboutButton';

    navBar.appendChild(homeButton);
    navBar.appendChild(orderButton);
    navBar.appendChild(aboutButton);

    navBar.id = 'navBar';

    return navBar
}

export default navBar;
