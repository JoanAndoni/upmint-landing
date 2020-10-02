// FUNCION TO SCROLL
function cardScroll(idCard, direction) {
    var cards = document.getElementById(idCard);
    const movement = (Math.floor(cards.offsetWidth / 250) * 250);
    direction === 'left' ? cards.scrollLeft -= movement : cards.scrollLeft += movement;
}

// FUNCION QUE CREA EL EFECTO DE HACER NEGRO EL NAVBAR
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.nav').addClass('black');
    } else {
        $('.nav').removeClass('black');
    }
});

function changeLanguage(selectLanguage) {
    if (selectLanguage.value === 'Español') {
        location.replace("https://www.upmint.co");
    }
    if (selectLanguage.value === 'English') {
        location.replace("https://en.upmint.co");
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendEmail(lang) {
    var loading = document.getElementById('loading'),
        popup = document.getElementById('mail-sent'),
        popupText = document.getElementById('popupText'),
        fullname = document.getElementById('fullName'),
        email = document.getElementById('email'),
        subject = document.getElementById('subject'),
        text = document.getElementById('text');
    loading.style.display = "flex";
    var info = {
        fullname: fullname.value,
        email: email.value,
        subject: subject.value,
        text: text.value
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
                Name: ${info.fullname}
                Subject: ${info.subject}
                Email: ${info.email}
                Text: ${info.text}
            `
        }).then(message => {
            loading.style.display = "none";
            fullname.value = '';
            email.value = '';
            subject.value = '';
            text.value = '';
            if (message.includes('OK')) {
                popupText.innerHTML = lang === 'es' ? 'El correo fue enviado exitosamente' : 'The email was sent successfully';
            } else {
                popupText.innerHTML = lang === 'es' ? 'El correo no pudo ser enviado, intentelo denuevo' : "The email couldn't be sent, please try again";
            }
            popup.style.display = 'flex';
            setTimeout(function () { popup.style.display = "none"; }, 3000);
        });
    }
}