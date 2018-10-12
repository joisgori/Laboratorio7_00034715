var container = document.getElementById('c1');
/*tiene <div class="container" id="c1"></div> */

container.innerText = '¡hola mundo!';
/*Dentro del div con id c1 veo el texto ¡Hola mundo!*/

container.style.background = "#000000";
/**
 * 
 */

 container.style.color = "#1cb723";

 container.style.height = "200px";
 container.style.width = "200px";


 container.innerHTML = "<input type='text' placeholder='escriba su texto'>";

 /**
  * ¿Qué es lo que se muestra en pantalla?
  * Una caja para entrada de texto con el plaholder correspondiente
  * ¿Cuál es la diferencia entre las propiedades innerHtml e innerText?
  *  --> innerHtml: devuelve el texto contenido en las etiquetas html.
  *  --> innerText: devuelve el texto que se encuentra en las etiquetas html.
  * DIFERENCIA: innerHTML detecta el valor como una nueva etiqueta a agregar al documento...
  * mientras que innerText detecta el valor y lo agrega como un texto plano...
  */

var containers = document.getElementsByClassName('c2');
/**
 * containers almacena un arreglo con los elementos con la clase c2
 */

containers = document.querySelectorAll(".c2");

containers.forEach(element => {
    element.style.background = "#009999";
 });

 containers.forEach(element => {
    element.innerHTML = "<input type='text' placeholder='escriba su texto'>";
 });

 var boton = document.getElementById("btn-click");

boton.onclick = function(evt)
{
alert("Hola mundo");
}

var btnCopy = document.getElementById("btnCopy");


btnCopy.onclick = function(evt)
{
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
} 

/**
 * ¿Qué sucede cuando se da click al botón?
 * Escribe el texto
 * ¿Cuál es la diferencia entre el value y el innerText?
 * en value es texto dinámico, el que ingrese el usuario, pero el innerText es un texto fijo preestablecido; donde ambos
 * se siguen presentando como textos planos
 */