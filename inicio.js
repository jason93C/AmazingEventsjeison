let persona1 = {
    nombre: "jeison",
    edad:10,
    altura:292
}
//Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

//Ejercico 7 
let entrada = false
let miNombre = "Edisson"
let nombre = prompt("Ingrese su nombre")
let pase = confirm("Tienes pase vip?")
if (pase == false) {
    let entrada = confirm("Tienes una entrada?")
}

if (miNombre === nombre || pase == true) {
    console.log("Bienvenido")
}else if (entrada == true) {
    let uso = confirm("Quieres usar la entrada")
    if (uso == true) {
        console.log("Bienvenido")
    }
}else{
    let comprar = confirm("Quires comprar una entrada?")
    if (comprar == true) {
        let dinero = parseInt(prompt("Ingrese su dinero disponible"))
        if (dinero > 1000) {
            console.log("Entrada adquirida - Bienvenido")
        }else{
            console.log("Compra Rechazada - No tiene dinero suficiente")
        }
    }else{
        console.log("Gracias por venir")
    }
}