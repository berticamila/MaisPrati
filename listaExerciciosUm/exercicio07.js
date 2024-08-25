
/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const prompt= require('prompt-sync')();

let apple = parseInt(prompt("Quantas maçãs você quer comprar? "));

let totalValue;

if(apple >= 12){
   totalValue = (apple * 0.25).toFixed(2);
}else{
    totalValue = (apple * 0.30).toFixed(2);
}
console.log(`O valor total da compra das maçãs é R$ ${totalValue}`);