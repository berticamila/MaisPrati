
/*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

let previousNumber = 0;
let currentNumber = 1;
let array = [];


for(i= 0; i < 10; i++){


    array.push(previousNumber);

   
    let nextNumber = previousNumber + currentNumber;
     
    previousNumber = currentNumber;
    currentNumber = nextNumber;
}

console.log(`Os 10 primeiros termos da sequência de Fibonacci são: ${array}`);