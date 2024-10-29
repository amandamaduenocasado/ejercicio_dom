/* Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....
 */

const startPointElement = document.getElementById('start-point');

console.log(startPointElement);

console.log(
  `Soy un h3 con el id ${startPointElement.id} y la clase ${startPointElement.classList} y la etiqueta ${startPointElement.tagName}.`
);

console.log(
  `Mi padre es un header con ${startPointElement.parentElement.tagName} con el id ${startPointElement.parentElement.id} la clase ${startPointElement.parentElement.classList} y la etiqueta ${startPointElement.parentElement.tagName}.`
);

console.log(
  `Mi hermano es un h2 con ${startPointElement.previousElementSibling.tagName} con el id ${startPointElement.previousElementSibling.id} la clase ${startPointElement.previousElementSibling.classList} y la etiqueta ${startPointElement.previousElementSibling.tagName}.`
);
