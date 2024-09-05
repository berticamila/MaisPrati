/*2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.*/

let book = { 
    title: "Dom Casmurro",
    author: "Machado de Assis",
    yearPublication: 1899,
    genre: "Romance Realista"
};

if (!book.publisher) {
    book.publisher = "Livraria Garnier";
}

console.log(`Livro ${book.title}, autor ${book.author}, ano de publicação ${book.yearPublication}, genêro ${book.genre}, editora ${book.publisher}`);