const title = () => {
    const element = document.createElement('h1');

    element.innerHTML = "Order";
    
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
        Please call 555-1234 to place your order \
        ";
    
    return text;
}

const createOrderPageDiv = () => {
    const div = document.createElement('div');

    div.id = 'page';

    div.appendChild(title());
    div.appendChild(picture());
    div.appendChild(text());

    return div
}

export default createOrderPageDiv;
