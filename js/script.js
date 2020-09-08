// FUNCION TO SCROLL
function cardScroll(idCard, direction) {
    var cards = document.getElementById(idCard);
    const movement = (Math.floor(cards.offsetWidth / 250) * 250);
    direction === 'left' ? cards.scrollLeft -= movement : cards.scrollLeft += movement;
}

function changeLanguage(selectLanguage) {
    if (selectLanguage.value === 'Español') {
        window.location.href = 'www.upmint.co';
        window.location.replace('www.upmint.co');
    }
    if (selectLanguage.value === 'English') {
        window.location.href = 'en.upmint.co';
        window.location.replace('en.upmint.co');
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendEmail(lang) {
    var info = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        text: document.getElementById('text').value
    };

    if (!validateEmail(info.email)) {
        lang === 'es' ? alert('El email es invalido') : alert('The email is not valid');
    } else {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "admin@upmint.co",
            Password: "398E352133B371609C9277620A187F8ED517",
            To: 'admin@upmint.co',
            From: "admin@upmint.co",
            Subject: "Contact from web page",
            Body: `
            Name: ${info.fullName}
            Subject: ${info.subject}
            Email: ${info.email}
            Text: ${info.text}
        `
        }).then(message => {
            alert(message);
        });
    }
}