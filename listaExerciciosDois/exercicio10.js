/*10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.*/

let sales = [
    { product: "Pia", number: 2, price: 100 }, 
    { product: "Armário", number: 3, price: 90 },  
    { product: "Mesa", number: 1, price: 100 }  
];

let totalSalesPrice = 0;

sales.forEach(sale => {
    totalSalesPrice += sale.price;
});

console.log(`O valor total das vendas é: ${totalSalesPrice}`)