/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
    "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
    0 à 3 = Reprovado, 4 à 7 = Recuperação, 8 à 10 = Aprovado*/

const prompt= require('prompt-sync')();

const note = parseInt(prompt("Digite a sua nota: "));
if (isNaN(note) || note < 0 || note > 10) {
    console.log("Por favor, insira uma nota válida entre 0 e 10.");
} else {

let classification;
if(note < 4){
    classification = "reprovado";
}else if(note < 8){
    classification = "em recuperação";
}else{
    classification = "aprovado";
}

console.log(`Você está ${classification}`);
}