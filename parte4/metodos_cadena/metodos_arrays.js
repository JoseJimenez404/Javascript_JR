// ------------------------------------------------------------------------
// TRANSFORMADORES  -- cambian|modifican al array

let nombres = ["maria","pedro","titulo"];

// 1. pop remueve el  ultimo elemento del array y lo devuelve.
let resultado = nombres.pop()

// 2. shift elimina el primer elemento del array y lo devuelve
let resultad = nombres.shift();

// 3. push() agrega un elemento del array al final 

let resultados = nombres.push("mike");

// 4. reverse() invierte el orden de los elementos de un array.
let num = [1,2,3,5,4,5];
let numeracion = num.reverse();

// 5. unshift() agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array

// se agreaga el 1 y 3 al array de num
num.unshift(1,3);

// 6. sort() ordena los elementos de un arreglo y devuelve un arreglo ordenado
	// si es de numeros es del menor al mayor, si es letra de la a a la z
let abecedario = ["jose", "mike","jhon"];
abecedario.sort();

// 7. splice() cambia el contenido de un array eliminando elementos existentes y/o agragando nuevos elementos

let numeritos = ["manzana","pera","mango"];

//el primero indica desde que posicion se inicia, el segundo hasta que posicion se elimina (en caso de eliminar), si solo se agrega, se indica en el primer parametro a partir de donde y los nuevos elementos , como en el ejemplo:
numeritos.splice(0,0,"Mandarina","Uva");

//si quiero agregar al final del array se agrega -1:

numeritos.splice("nuevo",-1,0,"jose","mike")

// ejemplo para eliminar elementos
numeritos.splice(1,4);


// --------------------------------------------------------------------------
// ACCESORES

// 1. join() une todos los elementos de una matriz (u objetos similar) en una cadena y lo devuelve, tambien permire agregarle parametro

let names = ["jose","nuevo","mike"];
//con esto devolvemos el array como una cadena, y ademas de ello , para cada elemento le agrega el signo "-"

let resul = names.join(" - ");

//otro ejemplo de uso:
let result = names.join("<br name:"); //aqui agregamos un salto de linea para cada elemento (que ahora es un array)


// slice() devuelve una parte del array dentro de un array nuevo

//cuando agregamos un -1 al final, no devolveria esa parte del array
let results = names.slice(0,-1)

// -----------------------------------------------------------------------------
// REPETICION


// 1.filter() crea un nuevo array, con todos los elementos que cumplan la condicion.

// con filter podemos devolver valores con una caracteristica en especifico:
let palabrat = ["jabon","metas","hola"];

//aqui devuelve un array, con los parametros que tengan mas de 8 elementos
let resultadito =palabrat.filter(numero => palabrat.length >8); 


let palabras = ["jabon","metas","hola"];
palabras.filter(palabras => console.log(palabras + "<br>")); 

// 2. forEach funcion para recorrer los elementos de un array

let palabrass = ["jabon","metas","hola"];
palabras.forEach(palabras => console.log(palabras + "<br>")); 