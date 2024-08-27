/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function num(n) {
  return Math.floor(Math.random() * n);
}

function oracion() {
  let persona = quien[num(quien.length)],
    acc = accion[num(accion.length)],
    cos = cosa[num(cosa.length)],
    cuand = cuando[num(cuando.length)],
    frase = persona + acc + cos + cuand;

  return frase;
}

let quien = [
    "mi abuela",
    "mi Hámster",
    "mi Perro",
    "mi Gato",
    "mi Pájaro",
    "mi vecino",
    "mi amigo",
    "mi tio",
    "mi abuelo",
    "mi novia"
  ],
  accion = [" empapo", " perdio", " daño", " tiro", " escondio", " rompio"],
  cosa = [" mi llave ", " mi telefono ", " mis lentes ", " mi bicicleta "],
  cuando = ["hoy", "ayer", "hace un segundo", "en la noche", "justo ahora"];

var excusa = document.getElementById("excusa"),
  boton = document.getElementById("boton");

console.log(excusa);
boton.addEventListener("click", function() {
  excusa.innerHTML = "";
  excusa.innerHTML += `<h1>Nueva Excusa Generada:</h1> <h1 id = "excusa">${oracion()}</h1>`;
});
