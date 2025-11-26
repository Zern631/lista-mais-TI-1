const prompt = require('prompt-sync')();

console.log("1 - Calcular o dobro de um número");
console.log("2 - Receber um elogio");
console.log("3 - Sair do sistema");

let opcao = prompt("Escolha uma opção de 1 a 3: ");

switch (opcao) {
    case '1':
        console.log("--- Você escolheu CALCULAR ---");
        let numero = Number(prompt("Digite um número: "));
        let resultado = numero * 2;
        console.log(`O dobro de ${numero} é ${resultado}!`);
        break;

    case '2':
        console.log("--- Você escolheu ELOGIO ---");
        console.log("Você está mandando muito bem na programação!");
        break;

    case '3':
        console.log("Saindo... Tchau tchau!");
        break;

    default:
        console.log("Ops! Essa opção não existe.");
        break;
}