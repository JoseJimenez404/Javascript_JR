/* 
while primero pregunta y despues ejecuta

do while primero ejecuta y despues pregunta 
son bucles indeterminados
*/

//  practicar el break en blucles

// for es un bucle determinado
//iterar = hacer los mismo varias veces

// inicializacion | condicion | ejecucion
// for (let i = 0; i < 6; i++){
// 	document.write(i)
// } 

// let i;
// for(i; i >= 5;i++){
// 	document.write(i)
// }


// for(let i = 0; i<=20;i++){
// 	if(i == 4){
// 		continue;
// 	}
// 	document.write("Hola," + i + "<br>")
// }

// ------------------------------ FOR IN

//  //DEVUELVE LA POSICION-INDICE EN LA QUE ESTA EL ARRAY, EMPEZANDO POR 0
// let animales = ["perro","gato","perico"]
// for (animal in animales){
// 	document.write(animal + "<br>")
// }

// // ---------------------------------FOR OF

// 	//DEVUELVE EL VALOR DE CADA POSICION DEL ARRAY, RECORRE TODO EL ARRAY
// for (animal of animales){
// 	document.write(animal+"<br>")
// }


let array1 = ["panchi", "josi", "msm"];
let array2 = ["marco", "mario", array1, "josefina"];

// for (let array of array2) {
//   if (array === array1) {
//     for (let element of array1) {
//       document.write(element + "<br>");
//       break;
//     }
//   } else {
//     document.write(array + "<br>");
//   }
// }



// Modo de recorrer un array o arrays
// array1.forEach(function(fruta,indice){
// 	document.write("Indice:" + indice +"peopple :" + fruta + "<br>")
// })

