const prompt = require('prompt-sync')();

let nota = Number(prompt("Digite uma nota: "));

if (nota <= 3){
    console.log('Reprovado');
} else if (nota <= 5){
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}