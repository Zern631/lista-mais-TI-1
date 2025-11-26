const prompt = require('prompt-sync')();

let somaMedia = 0;
let contador = 0;
let numeroEntrada = Number(prompt("Digite um número decimal (0 para sair): "));

while (numeroEntrada !== 0) {
    somaMedia += numeroEntrada;
    contador++;
    numeroEntrada = Number(prompt("Digite outro número (0 para sair): "));
}

if (contador > 0) {
    let media = somaMedia / contador;
    console.log(`A média aritmética é: ${media}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}