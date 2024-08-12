prompt = require("prompt-sync")();

let numero;

// while(numero == null) {
//     numero = parseInt(prompt("Digite um número e eu direi se ele é impar ou par. "));
//     if(isNaN(numero)) {
//         console.log("Por favor escolha um número válido.");
//         numero = null;
//     }
// }

numero = parseInt(prompt("Digite um número e eu direi se ele é impar ou par. "));

while(numero >= 2) {
    numero = numero - 2
}

if(numero > 0) {
    console.log("Seu número é impar.");
}
else {
    console.log("Seu número é par.");
}