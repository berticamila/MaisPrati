/*9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

let clients = [
    {
        name: "Isabele",
        age: 24,
        cidade : "São Paulo"
    },
    {
        name: "Marcos",
        age: 32,
        cidade : "Rio de Janeiro"
    },
    {
        name: "Patrícia",
        age: 34,
        cidade : "Alegrete"
    },
    {
        name: "Pedro",
        age: 40,
        cidade : "Caxias do Sul"
    }

]

let counting = 0;

clients.forEach(client =>{
    if(client.age > 30){
        counting++;
    }
    
})

console.log(`Existe ${counting} clientes com mais de 30 anos`);