//-------------------------------------- [ atributos globales ]

//1. class : lista de clases del elemento separada por el espacio

//2. contenteditable : indica si un elemento puede ser modificable por el usuario (bool)

// const titulo = document.querySelector('.titulo');
// titulo.setAttribute("contentEditable","true");
// si se pone en false, no dejaria modificarlo


//3. dir : indica la direccionalidad del texto

/* const titulo = document.querySelector('.titulo');
titulo.setAttribute("dir","ltr"); */

//hidden : indica si el elemento aun no es, o ya no es, relevante.

/* const titulo = document.querySelector('.titulo');
titulo.setAttribute("hidden","true"); //elemento se oculta */

//id: define un identificador unico.


//style: contiene declaraciones de estilo css para ser aplicadas al elemento

//tabindex: indica si el elemento puede obtener un focus de input

// const titulo = document.querySelector('.titulo');
// titulo.setAttribute("tabindex","-1");

//title : contiene un texto con la informacion relacionada al elemento que pertenece.

const titulo = document.querySelector('.titulo');
titulo.setAttribute("title","JSJSJSJ");



// ------------------------------ [ATRIBUTOS DE INPUTS]

// className

//value: nos dice que esta adentro del input, o asignarle un valor

//type:

const input = document.querySelector('.input-normal');
input.type = "color"

//accept : le dices cual seria el tipo de valor que se le pasara
input.accept = "image/png";

//form : permite hacer referencia a que formulario pertenece la etiquETA, SIN IMPORTAR QUE NO ESTE DENTRO DEL FORMULARIO

//minlength: CANTIDAD DE CARACTERES MINIMO

//maxlength: CANTIDAD DE CARACTERES MAXIMO

//placeholder: Sirve para sugerir lo que el usuario escribira en el input

//required: hace que un input sea requerido si o si.


//con el .style, puedes modificar los estilos de un elemento


titulo.computedStyleMap.color = "#32b"
