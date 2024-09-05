/*12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

let stock = [
    {
        product: "Papel ofício",
        number: 10,
        minimum: 9
    },
    {
        product: "Grampeador",
        number: 4,
        minimum: 8
    },
    {
        product: "Caneta",
        number: 40,
        minimum: 40

    },
    {
        product: "Caderno",
        number: 30,
        minimum: 60
    }
]


stock.forEach(product => {
   if(product.number < product.minimum){
    product.number *=2;
   }
   console.log(`Produto ${product.product}, quantidade ${product.number}, minímo ${product.minimum}`);
});