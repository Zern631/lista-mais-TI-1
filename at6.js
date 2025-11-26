const prompt = require('prompt-sync')();

let ladoA = Number(prompt("Digite o lado A: "));
let ladoB = Number(prompt("Digite o lado B: "));
let ladoC = Number(prompt("Digite o lado C: "));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo Equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}