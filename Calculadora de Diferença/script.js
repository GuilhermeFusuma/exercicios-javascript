prompt = require("prompt-sync")();

let num1;
let num2;


while(num1 == null) {
    num1 = parseFloat(prompt("Digite um número "));
    if(isNaN(num1)) {
        console.log("Por favor insira um número válido");
        num1 = null;
    }
}
while(num2 == null) {
    num2 = parseFloat(prompt("Digite outro número "));
    if(isNaN(num2)) {
        console.log("Por favor insira um número válido");
        num2 = null;
    }
}

let resultado;

if(num1 >= num2) {
    resultado = num1 - num2;
}
else {
    resultado = num2 - num1;
}

console.log(resultado);