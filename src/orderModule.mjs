import cuttingBoard from "./images/cuttingBoard.jpg";
export default orderModule;

function orderModule() {
    document.body.style.backgroundImage = `radial-gradient(rgba(255, 255, 255, .8) 20%, rgba(0, 0, 0, .8)), url(${cuttingBoard})`;
    const divList = [];
    for(let i = 0; i <= 8; i ++) {
        if(i === 5) {
            divList.push(document.createElement('a'));
            continue;
        }
        if(i % 3 === 0) {
           const title = document.createElement('h2');
            if(i === 0) {
                title.textContent = 'Address';
            } else if(i === 3) {
                title.textContent = 'Call or Order Online';
            } else {
                title.textContent = 'Store Hours';
            }
            divList.push(title);
        } else {
            divList.push(document.createElement('div'));
        }
    }
    divList[1].textContent = '45 George Dye Rd';
    divList[2].textContent = 'Hamilton Square, NJ 08690';
    divList[4].textContent = 'Phone - (609) 586-5770';
    divList[5].setAttribute('href', 'https://marcellospizzagrill.com/index.html');
    divList[5].textContent = 'ORDER ONLINE NOW';
    divList[7].textContent = 'Tuesday to Sunday: 10am - 10pm';
    divList[8].textContent = 'Monday: Closed';

    const orderContainer = document.createElement('div');
    orderContainer.id = 'orderContainer';
    for(let div of divList) {
        orderContainer.appendChild(div);
    }
    return orderContainer;
;}