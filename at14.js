const prompt = require('prompt-sync')();

let numeroFatorial = Number(prompt("Digite um número: "));
let fatorial = 1;

for (let i = numeroFatorial; i >= 1; i--) {
    fatorial = fatorial * i;
}

console.log(`O fatorial de ${numeroFatorial} é: ${fatorial}`);