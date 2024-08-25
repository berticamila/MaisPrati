/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

const prompt= require('prompt-sync')();

let number = parseInt(prompt("Digite um número "));

if(number % 2 === 0){
    console.log(`${number} `,"é par");
}else{
    console.log(`${number} `,"é ímpar");
}