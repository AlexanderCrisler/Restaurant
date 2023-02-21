const title = () => {
    const element = document.createElement('h1');

    element.innerHTML = "About";
    
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
        We have always been here, \
        We will always be here, \
        You are the invader. \
        It's Pizza Time. \
        ";
    
    return text;
}

const createAboutPageDiv = () => {
    const div = document.createElement('div');

    div.id = 'page';

    div.appendChild(title());
    div.appendChild(picture());
    div.appendChild(text());

    return div
}

export default createAboutPageDiv;
