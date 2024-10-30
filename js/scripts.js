/* Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....
 */

const startPointElement = document.getElementById('start-point');

console.log(startPointElement.parentElement);

console.log(
  `Soy un h3 con el id ${startPointElement.id}, la clase ${startPointElement.classList}, la etiqueta ${startPointElement.tagName}, el contenido ${startPointElement.textContent}.`
);

console.log(
  `Mi segundo hermano es un h2 con el id ${startPointElement.previousElementSibling.id}, la clase ${startPointElement.previousElementSibling.classList}, la etiqueta ${startPointElement.previousElementSibling.tagName} el contenido ${startPointElement.previousElementSibling.textContent}.`
); 

console.log(
  `Mi primer hermano es un h1 con el id ${startPointElement.previousElementSibling.previousElementSibling.id}, la clase ${startPointElement.previousElementSibling.previousElementSibling.classList}, la etiqueta ${startPointElement.previousElementSibling.previousElementSibling.tagName} el contenido ${startPointElement.previousElementSibling.previousElementSibling.textContent}.`
);

console.log(
  `Mi padre es un header con el id ${startPointElement.parentElement.id}, la clase ${startPointElement.parentElement.classList}, la etiqueta ${startPointElement.parentElement.tagName}, el contenido ${startPointElement.parentElement.textContent}.`
);



