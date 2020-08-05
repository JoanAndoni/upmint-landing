// FUNCION TO SCROLL
function cardScroll(idCard, direction) {
    var cards = document.getElementById(idCard);
    const movement = (Math.floor(cards.offsetWidth / 250) * 250);
    direction === 'left' ? cards.scrollLeft -= movement : cards.scrollLeft += movement;
}

function changeLanguage(selectLanguage) {
    if (selectLanguage.value === 'Español') {
        // window.location.href = 'www.upmint.co';
        window.location.replace('www.upmint.co');
    }
    if (selectLanguage.value === 'English') {
        // window.location.href = 'en.upmint.co';
        window.location.replace('en.upmint.co');
    }
}