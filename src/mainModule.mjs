import CorleonePizza from "./images/CorleonePizza.jpg";
export default mainModule;

    function mainModule() {
        document.body.style.backgroundImage = `url(${CorleonePizza})`;
        const quote = document.createElement('div');
        quote.className = 'quote';
        quote.innerText = "\"This pizza is not only made from the heart, but it's authentic.\"";
        return quote;
    };