/*8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.*/

let movies = [
    {title : "Titanic",
        director : "James Cameron",
        yearRelease: 1997
       
        },
    
    {title : "À procura da Felicidade",
        director : "Gabriele Muccino",
        yearRelease : 2006
           
        },
    {title : "Se Eu Fosse Você",
        director : "Daniel Filho",
        yearRelease : 2006
           
    }
]

let titles = [];
movies.forEach(movie => {
    
    titles.push(movie.title);
});

console.log(`Os títulos dos filmes são: ${titles.join(", ")}`);