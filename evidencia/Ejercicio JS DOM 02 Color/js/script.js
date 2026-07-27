
const btnColor = document.querySelector(".btn");
const bodyColor = document.querySelector("body");

const colores = ["grey", "white", "green", "blue", "red", "orange", "yellow", "violet"];
let count = 0;

bodyColor.style.background = "pink";
btnColor.addEventListener("click", cambiarColor);

function cambiarColor(){
    console.log("Si cambia de color");
    const color = parseInt(Math.random()*colores.length)
    bodyColor.style.background = colores[color];
    count++;
    
}

