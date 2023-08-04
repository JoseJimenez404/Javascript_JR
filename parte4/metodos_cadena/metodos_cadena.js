// ***********Metodos para buscar en la cadena de texto
let cadena = "cadena de prueba";
let cadena2 =  " Mundo";

// 1. --- concat : junta 2 o mas cadenas y retorna una nueva

// resultado = cadena.concat(", hola");
resultado = cadena.concat(cadena2);
console.log(resultado);

// ---------------------------------------------------------------

// 2. verifica que se inicie con esa parte de la cadena, startswith, endswith sirve para verificar que termine con esa parte de la cadena
resultado = cadena.endsWith(cadena2);
resultado = cadena.startsWith(cadena2);
console.log(resultado);


// ------------------------------------------------------------------

// 3.includes, verifica que lo que contenga este en una cadena, este en la cadena que estas verificando, devuelve true o false

resultado = cadena.includes(cadena);
console.log(resultado);

// ----------------------------------------------------------------------

// 4.indexOf, indica desde que posicion inicia la palabra que le estas indicando

//si la encuantra devuelve la posicion en la cadena, sino, solo devuelve un "-1"

// --------------------------------------------------------------------------


resultado = cadena.indexOf("de");
console.log(resultado);

// 5. lastIndexOf sirve para mostrar la posicion en la cadena, pero empieza de la derecha a izquierda

// ------------------------------------------------------------------------------

// ***********Metodos para agregar a la cadena de texto


// 6. padStart, rellena una cadena, tu le indicas cuantas palabras y que palabras son, al igual que padEnd, solo que esta la rellena de derecha a izqu

let cadenas = "abx";
let cad = "";

resultados = cadenas.padStart(20 , "Hi");
resultados = cadenas.padEnd(20 , "Hi");
console.log(resultados);

//repeat , devuelve la cadena repetida las veces que quieras
resultado = cadena.repeat(10);



// ------------------------------------------------------------------------------
// 1. split()  divide la cadena como le pidamos, devuelve un array

let cadenass =  "hola, jose"
//en este caso hola tomaria la posicion 0, y jose la 1, asi sucesivamente
resultado = cadenass.split(",")

// 2. substring, toma los valores que le indiques de una cadena de texto.

resultado = cadenass.substring(0,2)


// 3. toLowerCase() convierte una cadena a minuscula

resultado = resultado.toLowerCase();

// 4. tostring convierte un entero a un string
resultado = resultado.tostring();

// 5. trim() Elimina los espacios en una cadena

let resultado = cadenas.trim();

// 6. trimStart() Elimina los espacios del principio
// 7. trimEnd() Elimina los espacios del final;



