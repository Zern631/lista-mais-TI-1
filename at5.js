const prompt = require('prompt-sync')();

let peso = Number(prompt("Digite seu peso (kg): "));
let altura = Number(prompt("Digite sua altura (m): "));
let imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}