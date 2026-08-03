
// 1. Cambiamos el color del car y addToCard button cuando el color es seleccionado
// - Seleccionamos los elementos

const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

// Modificando Elementos
// Add Event Listeners
// Red Color

redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://www.ford.com.co/content/dam/Ford/website-assets/latam/co/nameplate/new-mustang/2024/overview/colorizer/rojo-metalico/fco-nameplate-color-rojo-metalico.jpg.dam.full.high.jpg/1713458063689.jpg")';
});

grayColor[0].addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://www.ford.com.co/content/dam/Ford/website-assets/latam/co/nameplate/new-mustang/2024/overview/colorizer/plata-puro/fco-nameplate-color-plata-puro.jpg.dam.full.high.jpg/1713458081503.jpg")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("https://www.ford.com.co/content/dam/Ford/website-assets/latam/co/nameplate/new-mustang/2024/overview/colorizer/negro-sombra/fco-nameplate-color-negro-sombra.jpg.dam.full.high.jpg/1713458067047.jpg")';
});

//Cart Button
const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

//Feedback Button
const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);

