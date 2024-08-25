/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/

const prompt= require('prompt-sync')();

let total = 0;

console.log("Vou te pedir 5 números para somá -los.");

for(let i = 0; i < 5; i++){
    let value =  Number(prompt("Digite um número: "));
    total += value;
}
console.log(`O valor total da soma é ${total}`);