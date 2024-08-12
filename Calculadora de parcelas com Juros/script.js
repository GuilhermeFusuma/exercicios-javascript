prompt = require("prompt-sync")();

// M = C*(1+i*t)
// J = C + i * t

console.log("Bem-vindo a calculadora com juros.");

let valorTotal;
let valorFinal;
let numeroParcelas;
let taxaJuros;
let jurosValor;
let parcelas;
let parcelaTemp;
const parcelasArr = [];

let parcelasCalc = 0;

while(valorTotal == null) {
    valorTotal = parseFloat(prompt("Digite o valor total. "));
    if(isNaN(valorTotal)) {
        console.log("Por favor insira um número válido");
        valorTotal = null;
    }
}
while(numeroParcelas == null) {
    numeroParcelas = parseInt(prompt("Digite o número de parcelas. "));
    if(isNaN(numeroParcelas)) {
        console.log("Por favor insira um número válido");
        numeroParcelas = null;
    }
}
while(taxaJuros == null) {
    taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal em porcentagem. "));
    if(isNaN(taxaJuros)) {
        console.log("Por favor insira um número válido");
        taxaJuros = null;
    }
}
taxaJuros = taxaJuros / 100;

// cálculo das parcelas sem juros.
parcelas = valorTotal / numeroParcelas

// cálculo do juros.
jurosValor = valorTotal * taxaJuros;

while(parcelasCalc != numeroParcelas) {
    parcelaTemp = null;

    parcelaTemp =  parcelas + parcelasCalc * jurosValor;

    parcelasArr.push(parcelaTemp);
    ++parcelasCalc;
}

valorFinal = valorTotal * (1 + taxaJuros * numeroParcelas);

console.log(`O valor total é: R$${valorFinal}.
    O número de parcelas é: ${numeroParcelas}.
    O valor do juros é: R$${jurosValor * numeroParcelas}.
    O valor de cada parcela é: ${parcelasArr}.`);