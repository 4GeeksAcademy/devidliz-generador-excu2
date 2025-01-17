/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Definir listas
let quienes = ["mi mama"];
let acciones = ["hizo"];
let que = ["reparaciones"];
let lugares = ["en el parque"];

// Agregar un nuevo valor a una lista
function agregarValor(lista, inputId) {
  // Obtener el valor del campo de entrada
  let input = document.getElementById(inputId);
  let valor = input.value;

  if (valor != "") {
    lista.push(valor);
    input.value = "";
  }
}

// generar una excusa aleatoria
function generarExcusa() {
  if (
    quienes.length == 0 ||
    acciones.length == 0 ||
    que.length == 0 ||
    lugares.length == 0
  ) {
    alert("Por favor, agrega al menos un elemento en cada categoría.");
    return;
  }

  // Elegir un valor aleatorio decada lista
  let quienAleatorio = quienes[Math.floor(Math.random() * quienes.length)];
  let accionAleatoria = acciones[Math.floor(Math.random() * acciones.length)];
  let queAleatorio = que[Math.floor(Math.random() * que.length)];
  let lugarAleatorio = lugares[Math.floor(Math.random() * lugares.length)];

  // Crear la excusa uniendo los valores seleccionados
  let excusa =
    quienAleatorio +
    " " +
    accionAleatoria +
    " " +
    queAleatorio +
    " " +
    lugarAleatorio +
    ".";

  // Mostrar la excusa en la página
  document.getElementById("excusa").textContent = excusa;
}

// Asignar eventos a los botones de agregar valor
document.getElementById("agregar-quien").addEventListener("click", function() {
  agregarValor(quienes, "quien");
});

document.getElementById("agregar-accion").addEventListener("click", function() {
  agregarValor(acciones, "accion");
});

document.getElementById("agregar-que").addEventListener("click", function() {
  agregarValor(que, "que");
});

document.getElementById("agregar-lugar").addEventListener("click", function() {
  agregarValor(lugares, "lugar");
});

// Asignar evento al botón de generar excusa
document
  .getElementById("generar-excusa")
  .addEventListener("click", generarExcusa);
