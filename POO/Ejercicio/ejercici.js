class Celular{
	encendido = false;
	constructor(color,peso,marca,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.marca = marca;
		this.rdc = rdc;
		this.ram = ram;
	}

	encenderCelular(){
		if(this.encendido == false){
			this.encendido = true;
			console.log("Enencendido");
		}else{
			console.log("El telefono ya esta encendido");
		}
	}

	apagarCelular(){
		if(this.encendido == true){
			this.encendido = false;
			console.log("Apagando");
		}else{
			console.log("El telefono ya esta Apagado");
		}
	}

	reiniciarCelular(){
		if(this.encendido == true){
		return console.log("Reiniciando telefono")
		}
		return console.log("no se puede reiniciar, ya que esta apagado")
	}

	tomarFotos(){
		return (`tomando foto con el telefono ${this.marca} con una resolucion de ${this.rdc}`)
	}
	grabar(){
		return ("grabando con una resolucion de camara de " + this.rdc)
	}

	mostrarInfo(){
		return `
				Color: ${this.color} <br>
				peso:  ${this.peso}  gramos<br>
				rdc:   ${this.rdc} px<br>
				Ram :  ${this.ram} GB<br>
				marca: ${this.marca}
				<br>`
	}
	
}

const celular = new Celular("Rojo",180,"Huawei",18,8)
document.write(celular.mostrarInfo());