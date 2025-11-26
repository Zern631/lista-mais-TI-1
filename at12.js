const prompt = require('prompt-sync')();

let numeroTabuada = Number(prompt("Digite um número para ver a tabuada: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}