/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const prompt= require('prompt-sync')();

const input = prompt("Digite dois valores diferentes separados por vírgula: ");
const values = input.split(',').map(Number); // Para dividir a string em um array de substrings e converte cada substring em um número. 

if (values.length !== 2) {
    console.log("Por favor, insira exatamente dois valores separados por vírgula.");
} else {
    const [a, b] = values;
    if (a === b) {
        console.log("Informe dois números diferentes.");
    } else {
        if (a <= b) {
            console.log(`Valores em ordem crescente: ${a}, ${b}`);
        } else {
            console.log(`Valores em ordem crescente: ${b}, ${a}`);
        }
    }
}