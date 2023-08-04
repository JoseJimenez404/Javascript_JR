

dineroCofla = prompt("Cuanto dinero tienes cofla")

dineroCofla = parseInt(dineroCofla)
if(dineroCofla >= 0.6 && dineroCofla <1){
	alert("comprate el helado de agua")
	alert("y te sobra "+(dineroCofla - 0.6))
}else if(dineroCofla >=1 && dineroCofla <1.6){
	alert("Comprate el helado de agua")
	alert("y te sobra "+ (dineroCofla -1))
}else if (dineroCofla >= 1.6 && dineroCofla <2){
	alert("comprate un helado de manzanilla")
	alert("y te sobra "+ (dineroCofla -1.6))
}else if(dineroCofla >=1.6){
	alert("Puedes comprarte todo")
}else{
	alert("mames,trabaja we")
}