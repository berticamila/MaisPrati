
/*4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.*/

let people = [
    {name : "Fábio",
    age : 10,
    city : "Porto Alegre"
    },
    
    {name : "Alice",
        age : 20,
        city : "Belo Horizonte"
        },
    {name : "Maria",
        age : 26,
        city : "Curitiba"
        }
]

for (const person of people) {
console.log(`Nome: ${person.name}, idade ${person.age}, cidade ${person.city}`);
}
