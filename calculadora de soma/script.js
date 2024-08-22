prompt = require("prompt-sync")();

console.log("Bem-vindo a calculadora");
let numOperacoes = parseInt(prompt("Digite quantas somas você quer fazer "));
let resultado = 0;
let numsArray = [];


// primeira tentativa
/* function calcs(number) {
     let soma = resultado + number;

     resultado = soma;
    } */


for(let i = 0; i != numOperacoes; i++) {
    let numTemp = null;
    
    numTemp = parseFloat(prompt("digite um número ")); 

    if(isNaN(numTemp)) {
        console.log("Por favor insira um número válido")
    }
    else {
        resultado += numTemp;
        numsArray.push(numTemp);
    }
}

console.log(resultado + ". todos os números: " + numsArray);