prompt = require("prompt-sync")();

console.log("Bem vindo ao conversor!");
let tempCelsius;

while(tempCelsius == null) {
    tempCelsius = parseFloat(prompt("Digite a temperatura a ser convertida."));
    if(isNaN(tempCelsius)) {
        console.log("digite um número válido");
        tempCelsius = null;
    }
}

let tempFarenheit = tempCelsius * 9/5 + 32;

console.log(`a temperatura em farenheit é ${tempFarenheit}`);