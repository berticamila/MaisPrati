/*11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

let requests = [
    {
        client: "Maria",
        product: "desinfetante",
        number: 3
    }, 
    {
        client: "Fátima",
        product: "detergente",
        number: 3
    }, 

    {
        client: "Maria",
        product: "sacos de lixo",
        number: 4
    }, 
    {
        client: "Fátima",
        product: "esponja de louça",
        number: 4
    }, 
    {
        client: "Miguel",
        product: "lava roupas",
        number: 2
    }, 
    {
        client: "Miguel",
        product: "amaciante",
        number: 1
    }
]

let totalClient = {};

requests.forEach(request => {
    if (totalClient[request.client]) {
        totalClient[request.client] += request.number;
    } else {
        totalClient[request.client] = request.number;
    }
});

for (const client in totalClient) {
    console.log(`Cliente: ${client}, Quantidade total de produtos comprados: ${totalClient[client]}`);
}