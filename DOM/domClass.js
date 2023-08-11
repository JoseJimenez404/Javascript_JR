const titulo = document.querySelector(".titulo");

titulo.classList.add("titulo"); //añade el nombre de la clase
titulo.classList.remove("titulo"); //elimina el nombre de la clase

titulo.classList.toggle("hola",true); //agrega o elimina el nombre de la clase, si le pasas el parametro de true, siempre va a existir ese nombre, en cambio si le pones false, siempre lo va a eliminar.


// reemplaza el nombre de una clase (si es que existe), por el nuevo nombre que le das.
let valor =  titulo.classList.replace("reclase","chico");



//el codigo de abajo es la manera mas sencilla para verificar si es correcto o no , verdadero o falso

if(valor){ //aqui estamos validando si es verdadero
	console.log("es verdadero")
}else{
	console.log("es falso")
}


// ---------------------------------------------------------------- obtencion y modificacion de elementos


const titulos = document.querySelector(".titulos");

let resultado = titulos.innerText; //devuelve el texto visible de un nodo element

//innerHtml : devuelve el contenido html de un elemento


//



// -------------------------------- Creacion de Elementos ---------------

//createElements()

//appendChild()

//createDocumentFragment()