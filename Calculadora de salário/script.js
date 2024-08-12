prompt = require("prompt-sync")();

console.log("Bem vindo a calculadora de salário!");

let horasTrabalhadas;
let valorHora;
let salarioSemanal;
let salarioMensal;

while(horasTrabalhadas == null) {
    horasTrabalhadas = parseFloat(prompt("Digite as horas trabalhadas por semana. "))
    if(isNaN(horasTrabalhadas)) {
        console.log("Por favor insira um número válido.");
        horasTrabalhadas = null;
    }
}
while(valorHora == null) {
    valorHora = parseInt(prompt("Digite o valor por hora trabalhada. "))
    if(isNaN(valorHora)) {
        console.log("Por favor insira um número válido.");
        valorHora = null;
    }
}

salarioSemanal = horasTrabalhadas * valorHora;
salarioMensal = horasTrabalhadas * valorHora * 4;

console.log(`Seu salário semanal é: R$${salarioSemanal}
    e seu salário mensal é: R$${salarioMensal}`);