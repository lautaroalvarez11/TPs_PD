/*
1. Pedí (con prompt) un número y mostrale al usuario si es positivo, negativo o cero.
2. Usando switch, pedí un día de la semana y mostrá un mensaje: "Es lunes", "Es martes", etc.
*/

let numero = prompt("Ingrese un número:");
if(numero > 0) {
    console.log("El número es positivo.");
} else if(numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

