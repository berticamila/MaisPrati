/*14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.*/

let company = {
    department: [
        {
            name: "RH",
            employees: ['Ana', 'Carlos', 'Maria']
        },
        {
            name: "Marketing",
            employees: ['Miguel', 'Marta', 'Sabrina']
        },
        {
            name: "Design",
            employees: ['Paula', 'Ana', 'Cristian']
        },
        {
            name: "Desenvolvimento",
            employees: ['Lauro', 'Miriam', 'Lívia']
        }
    ]
};
for (const index in company.department) {
    const department = company.department[index];
    for (const employee of department.employees) {
        console.log(`Funcionário: ${employee}, Departamento: ${department.name}`);
    }
}

