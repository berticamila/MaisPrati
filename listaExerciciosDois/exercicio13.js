/*13. Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.*/

let cart = {
    items: [
        {
            name: "Grill",
            number: 2,
            unitaryPrice: 100
        },
        {
            name: "Liquidificador",
            number: 1,
            unitaryPrice: 150
        },
        {
            name: "Batedeira",
            number: 3,
            unitaryPrice: 200
        }
    ]
};

let totalPrice = 0;

cart.items.forEach(item => {
    totalPrice += item.number * item.unitaryPrice;
});

console.log(`O valor total do carrinho é: ${totalPrice}`);