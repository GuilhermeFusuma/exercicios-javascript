prompt = require("prompt-sync")();

const imposto = 0.18;
let produto;
let preco;
let quantia;
let valorTotal;
let impostoTotal;
let valorFinal;

produto = prompt("Qual é o nome do produto? ");
while(preco == null) {
    preco = parseFloat(prompt("Digite o preço do produto. "));
    if(isNaN(preco)) {
        console.log("Por favor digite um número válido.");
        preco = null;
    }
}
while(quantia == null) {
    quantia = parseFloat(prompt("Digite a quantidade do produto. "));
    if(isNaN(quantia)) {
        console.log("Por favor digite um número válido.");
        quantia = null;
    }
}

valorTotal = preco * quantia;
impostoTotal = valorTotal * imposto;
valorFinal = valorTotal + impostoTotal;

console.log(`Nome do produto: ${produto}
    Preço unitário: ${preco}
    Quantidade: ${quantia}
    Imposto Total: ${impostoTotal}
    Valor total: ${valorFinal}`);