const colorGreen = () => {
    document.getElementById('test')
    .style.backgroundColor = 'green';
};

const colorWhite = () => {
    document.getElementById('test')
    .style.backgroundColor = 'white';
};

function show() {
    switch (document.getElementById("City").value)
    {
        case "Istanbul": document.getElementById ("foto")
        .src = "assets/imeges/Istanbul.jpg"; break;
        case "Bagan": document.getElementById ("foto")
        .src = "assets/imeges/Bagan.jpg"; break;
        case "AngKor": document.getElementById ("foto")
        .src = "assets/imeges/Angkor.jpg"; break;
    }
}