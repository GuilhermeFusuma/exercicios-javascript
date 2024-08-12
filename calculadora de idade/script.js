prompt = require("prompt-sync")();

let year = new Date().getFullYear();
let age;
let birthDate = parseFloat(prompt("Olá, por favor digite seu ano de nascimento."));

age = year - birthDate;

console.log(`Sua idade é  ${age}`);