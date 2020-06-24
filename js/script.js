
function getImages() {
    return {
        yellow: document.getElementById('yellow'),
        green: document.getElementById('green'),
        red: document.getElementById('red'),
        blue: document.getElementById('blue'),
    };
}

function getSections() {
    return [
        document.getElementById('home-text-block'),
        document.getElementById('who-text-block'),
        document.getElementById('who-text2-block')
    ];
}

function setSections(type) {
    var sections = getSections();
    let positions = [14, 8, 55];
    for (let index = 0; index < sections.length; index++) {
        if (type.includes(index)) {
            index === 0 ? sections[index].style.top = '35%' : sections[index].style.left = `${positions[index]}%`;
            sections[index].style.opacity = "100%";
        } else {
            index === 0 ? sections[index].style.top = '30%' : sections[index].style.left = `${positions[index] - 5}%`;
            sections[index].style.opacity = "0%";
        }
    }
}

function home() {
    setSections([0]);
    var images = getImages();

    images.yellow.style.top = "15%";
    images.yellow.style.left = "-20%";

    images.green.style.top = "0%";
    images.green.style.left = "0%";
    images.green.style.opacity = "20%";
    images.green.style.width = "100vw";


    images.red.style.top = "52%";
    images.red.style.left = "-500px";
    images.red.style.width = "500px"

    images.blue.style.top = "16%";
    images.blue.style.left = "110%";
}

function who() {
    setSections([1, 2]);
    var images = getImages();

    images.yellow.style.top = "15%";
    images.yellow.style.left = "-20%";

    images.green.style.top = "100%";
    images.green.style.left = "30%";
    images.green.style.opacity = "70%";
    images.green.style.width = "600px";

    images.red.style.top = "52%";
    images.red.style.left = "8%";
    images.red.style.height = "280px"

    images.blue.style.top = "16%";
    images.blue.style.left = "110%";
}

function work() {
    setSections([]);
    var images = getImages();

    images.yellow.style.top = "15%";
    images.yellow.style.left = "-20%";

    images.green.style.top = "100%";
    images.green.style.left = "30%";
    images.green.style.opacity = "70%";
    images.green.style.width = "600px";

    images.red.style.top = "52%";
    images.red.style.left = "-500px";
    images.red.style.width = "500px"

    images.blue.style.top = "16%";
    images.blue.style.left = "5%";
}

function services() {
    console.log("Servicios");
}

function budget() {
    console.log("Cotizar");
}

function contact() {
    console.log("Cotizar");
}