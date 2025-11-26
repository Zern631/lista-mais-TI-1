const prompt = require('prompt-sync')();

let numeroMacas = Number(prompt("Quantas maçãs você comprou? "));
let precoTotal;

if (numeroMacas < 12) {
    precoTotal = numeroMacas * 0.30;
} else {
    precoTotal = numeroMacas * 0.25;
}

console.log(`O valor total da compra é: R$ ${precoTotal.toFixed(2)}`);