const title = () => {
    const element = document.createElement('h1');

    element.innerHTML = "Hello Restaurant";
    
    return element; 
}

const picture = () => {
    const pic = document.createElement('img');

    pic.src = 'https://knollaspizza.com/wp-content/uploads/2020/08/pizza-header.jpg';

    return pic;
}

const text = () => {
    const text = document.createElement('p');

    text.innerHTML = 
        " \
        Hello Restauraunt is a modern take on \
        Pizza. From our world reknown chefs from Italy, \
        we bring you the perfect pizza for your lifestyle. \
        ";
    
    return text;
}

const createHomepageDiv = () => {
    const div = document.createElement('div');

    div.appendChild(title());
    div.appendChild(picture());
    div.appendChild(text());

    return div
}

export default createHomepageDiv;