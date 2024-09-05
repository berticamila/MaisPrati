/*7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

let products = [
    {name: "televisão",
        price: 1800,
        discount: 50.00
    },
    {name: "notebook",
        price: 2500,
        discount: 70.00
    },
    {name: "tablet",
        price: 500,
        discount: 30.00
    }
]

products.forEach(product => {
    let discount = product.price * 0.10;
    let newPrice = product.price - discount;
    console.log(`O produto ${product.name} tem como preço original o valor de: ${product.price} e o novo preço com desconto de 10% é: ${newPrice}`);
});
