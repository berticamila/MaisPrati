/*15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.*/

let transactions= [
    {
        sort: "entrada",
        price: 10.00
    },
    {
        sort: "saida",
        price: 5.00
    },
    {
        
        sort: "entrada",
        price: 25.00

    },
    {
        sort: "entrada",
        price: 9.00
    }
]

let endingBalance = 0;

transactions.forEach(transaction => {
    if(transaction.sort === "entrada"){
        endingBalance+=transaction.price;
    }else{
        endingBalance-=transaction.price;
    }
});

console.log(`O saldo final das transações é de R$ ${endingBalance}`);