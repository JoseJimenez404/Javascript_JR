//nodos


//un nodo es cualquier etiqueta del cuerpo
//tipos de nodos:

//document, es el nodo principal, a partir del cual se derivan el resto de nodos.

//element: nodos definidos por etiquetas html

//text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text.

//attribute: los atributos de las etiquetas definen nodos.

//comentarios y otros.



// -------------------Metodos de seleccion de elementos

//document.getElementById() : selecciona un elemento por id.

document.getElementById("parrafo");

//document.getElementByTagName() : selecciona todos los elementos con ese nombre

document.getElementsByTagName("p"); //aqui estamos seleccionando todos los elementos con etiqueta p


//querySelector() : devuelve el primer elemento que coindida con el grupo especificado de selectores, se usa con clases.

document.querySelector(".nuevo")

//querySelectorAll()  : devuelve todos los elementos que coindida con el grupo especificado de selectores

document.querySelectorAll(".parrafito")




//------------------------------------------------------------------------------

// ------------------------ Metodos para Definir, Obtener y Eliminar valores de atributos.

//setAttribute()  : modifica el valor de un atributo

const rango = document.querySelector(".rango");
rango.setAttribute("type", "text"); //aqui modificamos de range a text, el primero define que se modificara, y el segundo el nuevo valor

//getAttribute() : obtiene el valor de un atributo

const rango2 = document.querySelector(".rango");
valorAtt = rango.getAttribute("type");

document.write(valorAtt);

//removeAttribute() : Remueve el valor de un atributo

valordelATT = rango.removeAttribute("type"); //se elimina por completo el valor del type.