/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const prompt= require('prompt-sync')();

let input = Number(prompt("Informe um número e saiba o fatorial dele "));
let originalInput = input;
let fatorial = 1;

while(input > 1){
   
    fatorial *= input;
    input--;
}
console.log(`O fatorial de ${originalInput} é ${fatorial}`);