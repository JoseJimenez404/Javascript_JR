class Animal{

	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;

	}

	// cuando la accion que realiza el objeto esta adentro se llama metodo;
	// las funciones flecha, no pueden usarse para metodos dentro de una clase



	Info(){
		console.log(this.info)
	}

}

class Perro extends Animal{
	constructor (especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = raza;
	}
	// set sirve para insertar parametros, cambiar o agregar nuevos valores
	set setRaza(newName){
		this.raza = newName;
	}
	//get sirve para mandar a llamar alguna propiedad o metodo.
	get getRaza(){
		return this.raza;
	}
	
}

//un metodo estatico no depende de la creacion del objeto.


// si se crea una accion aqui, afuera de una clase se llama funcion 

// cuando se instancia un objeto es mas recomendable declararlo como const

const perroo = new Animal("perro",5,"negro");
console.log(perroo);
console.log(perroo.color) 