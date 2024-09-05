/*6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/

let employees = [
    {name : "Martina",
        post : "Secretária",
        salary : 1.600
        },
    {name : "Fernando",
        post  : "Professor",
        salary : 1.900
        },
    {name : "Marta",
        post : "Operadora de caixa",
        salary : 1.500
    }
]

function filterEmployees(employees, amount) {


    for (const employee of employees) {
        if (employee.salary > amount) {
            console.log(`Funcionário(a) com salário acima do valor especificado de ${amount.toFixed(3)}: ${employee.name}, cargo ${employee.post} e salário ${employee.salary.toFixed(3)}`);
        }
    }


}

let amount = 1.500;
let result = filterEmployees(employees, amount);