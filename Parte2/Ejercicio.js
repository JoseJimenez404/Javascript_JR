// let free = false;

// const validarCliente = (time) => {
//   let edad = prompt("Cual es tu edad ? : ");
//   if (edad >= 18) {
//     if (time >= 2 && time < 7 && free == false) {
//       alert("puedes pasar gratis");
//       free = true;
//     } else {
//       alert(
//         `son las ${time}:00 HRS , puedes pasar, pero deveras de pagar la entrada`
//       );
//     }
//   } else {
//     alert("mames we, estas muy chico");
//   }
// };

// validarCliente(10);



// ---------------------------------------------------------------------------------------


// Ejercicio 2:


let cantidad = prompt("Cuantos alumnos son:");
let alumnosTotales = [];

for(i =0; i< cantidad; i++){
	alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
}


const tomarAsistencia = (nombre,p) =>{
	let presencia  = prompt(nombre);
	if(presencia == "p" || presencia == "P"){
		alumnosTotales[p][1]++;
	}
} 


for (i = 0; i <30; i++){
	for(alumno in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumno][0],alumno);
	}
}


for (alumno in alumnosTotales){
	let resultado = `${alumnosTotales[alumno][0]}:<br>
	----- Presentes : ${alumnosTotales[alumno][1]}<br>
	----- Ausencias : ${30 - alumnosTotales[alumno][1]}
	`;
	if(30 - alumnosTotales[alumno][1] >18){
		resultado += "<b style= 'color:red'>Reprobado por inasistencias </b> <br><br>"
	}else{
		resultado += "<br><br>"
	}
	document.write(resultado)
}