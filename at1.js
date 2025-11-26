const prompt = require('prompt-sync')();

let numero = prompt("digite um numero: ");
if (numero % 2 !== 0){
    console.log('O numero é impar')
} else {
    console.log('O numero é par')
}