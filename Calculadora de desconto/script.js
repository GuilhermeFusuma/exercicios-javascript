prompt = require("prompt-sync")();

let produto;
let preco;
let desconto;
let valorDesconto;
let precoFinal;

produto = prompt("Digite o nome do produto ");
while(preco == null) {
    preco = parseFloat(prompt("Digite o preço do produto "));
    if(isNaN(preco)) {
        console.log("Por favor insira um número válido");
        preco = null;
    }
}
while(desconto == null) {
    desconto = parseFloat(prompt("Digite o valor do desconto em porcentagem "));
    if(isNaN(desconto)) {
        console.log("Por favor insira um número válido");
        desconto = null;
    }
}

valorDesconto = preco * desconto / 100;
precoFinal = preco - valorDesconto;

console.log(`Nome do produto: ${produto}
    Preço original: ${preco}
    Desconto: ${valorDesconto}
    Valor total: ${precoFinal}`);