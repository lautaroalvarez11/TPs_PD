/*
1. Declara dos números y muestra en consola: su suma, resta, multiplicación y división.
2. Declara una variable con tu edad y usa un operador ternario para imprimir:
    "Sos mayor de edad" si la edad es ≥ 18,
    "Sos menor de edad" en caso contrario.
*/

let num1 = 10;
let num2 = 5;

console.log("Suma: ", num1 + num2);
console.log("Resta: ", num1 - num2);
console.log("Multiplicación: ", num1 * num2);
console.log("División: ", num1 / num2);

let edad = 22;

let resultado = edad >= 18 ? "Sos mayor de edad" : "Sos menor de edad";
console.log(resultado);