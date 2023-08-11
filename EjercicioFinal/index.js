function crearLlave(nombre,modelo,precio){
	nombre = `<h2> ${nombre}</h2>`;
	modelo = `<h3> ${modelo}</h3>`;
	precio = `<p> Precio: <b>${precio} </b></p>`
	return [nombre,modelo,precio];
}