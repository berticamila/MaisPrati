/*5. Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.*/

let students = [
    {name : "Marta",
        note1 : 10,
        note2 : 9
        },
        
        {name : "Flávia",
            note1  : 16,
            note2  : 12
            },
        {name : "Letícia",
            note1  : 8,
            note2  : 14
            }
    
]

for (const student of students) {
    let media = (student.note1 + student.note2)/2;
    console.log(`Aluno: ${student.name}, média ${media}`);
}
