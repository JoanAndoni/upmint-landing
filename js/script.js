// FUNCION TO SCROLL
function cardScroll(idCard, direction) {
    var cards = document.getElementById(idCard);
    const movement = (Math.floor(cards.offsetWidth / 250) * 250);
    direction === 'left' ? cards.scrollLeft -= movement : cards.scrollLeft += movement;
}