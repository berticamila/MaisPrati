/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

const prompt= require('prompt-sync')();

let weight = parseFloat(prompt("Digite seu peso com ponto "));
let height = parseFloat(prompt("Digite sua altura com ponto "));

let imc = weight / (height * height);
let category;

if(imc < 18.5){
    category = "abaixo do peso";
}else if( imc < 25){
    category = "peso normal";
}else if( imc < 30){
    category = "sobrepeso";
}else{
    category = "obesidade";
}

console.log(`O seu IMC é ${imc.toFixed(2)} e você está ${category}.`);