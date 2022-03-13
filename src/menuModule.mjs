import cuttingBoard from "./images/cuttingBoard.jpg";
import CorleonePizza from "./images/CorleonePizza.jpg";
import steakSandwich from "./images/steakSandwich.jpg";
import pizza from "./images/pizza.jpg";
export default menuModule;

function menuModule() {
    document.body.style.backgroundImage = `radial-gradient(rgba(255, 255, 255, .8) 20%, rgba(0, 0, 0, .8)), url(${cuttingBoard})`;
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';
    for(let i = 1; i <= 12; i++) {
        const div = document.createElement('div');
        if(i === 1) {
            const img = document.createElement('img');
            img.setAttribute('src', `${CorleonePizza}`);
            div.appendChild(img);
            const title = document.createElement('div');
            title.textContent = 'Corleone Pizza';
            div.appendChild(title);
        }
        if(i === 3) {
            div.textContent = '15.99';
        }
        if(i === 4) {
            div.textContent = 'only sold at Marcello\'s Pizza-Grill'
        }
        if(i === 5) {
            const img = document.createElement('img');
            img.setAttribute('src', `${steakSandwich}`);
            div.appendChild(img);
            const title = document.createElement('div');
            title.textContent = 'Steak Sandwich';
            div.appendChild(title);
        }
        if(i === 7) {
            div.textContent = '6.45';
        }
        if(i === 8) {
            div.textContent = 'cheese 50 ₵';
        }
        if(i === 9) {
            const img = document.createElement('img');
            img.setAttribute('src', `${pizza}`);
            div.appendChild(img);
            const title = document.createElement('div');
            title.textContent = 'pizza';
            div.appendChild(title);
        }
        if(i === 11) {
            const price1 = document.createElement('div');
            const price2 = document.createElement('div');
            price1.textContent = '10" personal - 7.95';
            price2.textContent = '16" large - 14.00';
            div.appendChild(price1);
            div.appendChild(price2);
        }
        if(i === 12) {
            const toppingPrice = document.createElement('div');
            const toppings = document.createElement('div');
            toppingPrice.textContent = 'toppings: whole $3.00 - half $2.00';
            toppings.textContent = 'Pepperoni, Susage, Bacon, Ham, Mushroom, Onion, Sweet Peppers';
            div.appendChild(toppingPrice);
            div.appendChild(toppings);
        }
        if((i + 2) % 4 === 0) {
            div.textContent = "....................................................................................................................................................................................................";
        }
        menuContainer.appendChild(div);
    }
    return menuContainer;
}