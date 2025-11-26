const prompt = require('prompt-sync')();

let termo1 = 0;
let termo2 = 1;
let proximoTermo;

console.log("Os primeiros 10 números:");

for (let i = 1; i <= 10; i++) {
    console.log(termo1);
    proximoTermo = termo1 + termo2;
    termo1 = termo2;
    termo2 = proximoTermo;
}