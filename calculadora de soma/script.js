prompt = require("prompt-sync")();

console.log("Bem-vindo a calculadora");

let numOperacoes = prompt("Digite quantas somas você quer fazer ");
parseFloat(numOperacoes);

let nums = 0;
let resultado = 0;

function calcs(number) {
    let soma = resultado + number;

    resultado = soma;
}

while(nums != numOperacoes) {
    let numTemp = null;
    
    numTemp = parseFloat(prompt("digite um número ")); 

    if(isNaN(numTemp)) {
        console.log("Por favor insira um número válido")
    }
    else {
        calcs(numTemp);
        ++nums;
    }
}

console.log(resultado);