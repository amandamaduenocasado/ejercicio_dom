/* Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....
 */

const startPointElement = document.getElementById('start-point');

console.log(startPointElement.parentElement);

/* console.log(`Soy un h3 con el id ${startPointElement} con el id ${h3.id} la clase ${h3.classList} y la etiqueta ${textContent.h3}.`);

console.log(`Mi padre es un header con ${startPointElement.parentElement} con el id ${startPointElement.parentElement.id} la clase ${startPointElement.parentEleme[0]} y la etiqueta ${textContent.header}.`);

console.log(`Mi hermano es un h2 con ${startPointElement.previousElementSibling} con el id ${startPointElement.subtitle.id} la clase ${startPointElement.subtitle} y la etiqueta ${textContent.h2}.`);

*/
