alert("bienvenido al restaurante... su cuenta es...")
//ingresar datos
var entrada= parseInt(prompt("Ingrese el costo de la entrada"))
var segundo= parseInt(prompt("Ingrese el costo del segundo"))
var postre= parseInt(prompt("Ingrese el costo del postre"))

//procesar datos
var total = segundo + postre;
var igv = total +(total*0,18)

alert("Presiona la tecla F12 para mostrar los resultados")
//Mostrar datos
console .log("El costo de la entrada es:" + entrada)

console .log("El costo del segundo es:" + segundo)
console .log("El costo del postre es:" + postre)
console .log("El costo total es:" + total)
console .log("El costo total con igv:" + igv)







