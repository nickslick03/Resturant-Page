import "./styles.css";
import logo from "./images/logo.png";
import mainModule from "./mainModule.mjs";
import menuModule from "./menuModule.mjs";
import orderModule from "./orderModule.mjs";

export const nodeWrapper = (() => {
    const body = document.createElement('span');
    const header = document.createElement('header');
    const divList = [];
    for(let i = 0; i <= 2; i++) {
        divList[i] = document.createElement('div');
    }
    for(let i = 0; i <= 2; i += 2) {
        let button = document.createElement('button');
        if(i === 0) {
            button.id = 'menuButton';
            button.innerText = 'Menu';
        } else {
            button.id = 'orderButton';
            button.innerText = 'Order';
        }
        divList[i].appendChild(button);
    }

    const img = document.createElement('img');
    img.setAttribute('src', `${logo}`);
    img.setAttribute('alt', 'Marcello\'s Pizza Grill');
    divList[1].appendChild(img);

    for(let div of divList) {
        header.appendChild(div);
    }
    body.appendChild(header);

    const mainNode = document.createElement('main');
    body.appendChild(mainNode);

    const footer = document.createElement('footer');
    const footerLink = document.createElement('a');
    footerLink.setAttribute('href', 'https://marcellospizzagrill.com/index.html');
    footerLink.innerText = "Copyright Marcello's pizza-grill 2021";
    footer.appendChild(footerLink);
    body.appendChild(footer);

    document.body.appendChild(body);
    
    return {
        menuButton: divList[0],
        logo: divList[1],
        orderButton: divList[2],
        mainNode,
    };
})();

const nodeLoader = (() => {
    const swapNode = module => {
        nodeWrapper.mainNode.textContent = '';
        nodeWrapper.mainNode.appendChild(module());
    };
    nodeWrapper.logo.addEventListener('click', () => {
        swapNode(mainModule);
    });
    nodeWrapper.menuButton.addEventListener('click', () => {
        swapNode(menuModule);
    });
    nodeWrapper.orderButton.addEventListener('click', () => {
        swapNode(orderModule);
    });
    swapNode(mainModule);
})();