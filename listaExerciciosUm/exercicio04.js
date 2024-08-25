/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const prompt= require('prompt-sync')();

console.log("Escolha uma opção:");
console.log("1. Somar dois números");
console.log("2. Mostrar a data atual");
console.log("3. Mostrar a hora atual");

const choice = parseInt(prompt("Digite o número da sua escolha: "));

switch (choice) {
    case 1:
        const num1 = parseFloat(prompt("Digite o primeiro número: "));
        const num2 = parseFloat(prompt("Digite o segundo número: "));
        console.log(`A soma é: ${num1 + num2}`);
        break;

    case 2:
        console.log(`A data atual é: ${new Date().toLocaleDateString()}`);
        break;
    case 3:
        console.log(`A hora atual é: ${new Date().toLocaleTimeString()}`);
    break;
    default:
        console.log("Opção inválida. Por favor, escolha uma opção entre 1 e 3.");
        break;
}
