prompt = require("prompt-sync")();

console.log("Bem vindo a calculadora de parcelas!");

let valorTotal;
let parcelas;
let valorParcelado;

while(valorTotal == null) {
    valorTotal = parseFloat(prompt("Digite o valor Total da compra."));
    if(isNaN(valorTotal)) {
        console.log("Por favor insira um número válido.");
        valorTotal = null;
    }
}
while(parcelas == null) {
    parcelas = parseInt(prompt("Digite a quantidade de parcelas."));
    if(isNaN(parcelas)) {
        console.log("Por favor insira um número válido.");
        valorTotal = null;
    }
}

valorParcelado = valorTotal / parcelas;

console.log(`Valor total: ${valorTotal}
    Quantidade de parcelas: ${parcelas}
    Valor de cada Parcela: ${valorParcelado}`);