/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 
e fazer a média aritmética desses números.*/

const prompt= require('prompt-sync')();

let i = 0;
let sum = 0;
let decimal;
  
do {
    decimal = parseFloat(prompt("Digite números decimais, se quiser parar digite 0: "));
    if (decimal !== 0) {
        sum += decimal;
        i++;
    }
} while (decimal !== 0);
  
let average = i > 0 ? sum / i : 0;  // Para evitar a divisão por zero
console.log(`A média aritmética dos números que você digitou é ${average.toFixed(1)}`);