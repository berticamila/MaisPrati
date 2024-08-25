/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else.*/

const prompt= require('prompt-sync')();

const idade = parseInt(prompt("Digite a sua idade "));

    if (idade < 0) {
        console.log("Idade inválida. Por favor, insira um número positivo.");
    } else {
        let ageRange;
    
        if (idade < 13) {
            ageRange = "criança";
        } else if (idade < 18) {
            ageRange = "adolescente";
        } else if (idade < 60) {
            ageRange = "adulto";
        } else {
            ageRange = "idoso";
        }
    
        console.log(`Você é ${ageRange}`);
    }