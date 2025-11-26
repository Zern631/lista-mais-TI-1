const prompt = require('prompt-sync')();

let idade = Number(prompt("Digite sua idade: "));

if (idade < 12){
    console.log('você é uma criança');
} else if (idade <= 17){
    console.log('você é um adolescente');
} else if (idade <= 59){
    console.log('você é um adulto');
} else {
    console.log('você é um idoso');
}