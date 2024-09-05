
/*3. Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.*/

function filterProperties(product, specificValue) {
    let newObject = {};

    for (const key in product) {
        if (product[key] > specificValue) {
            newObject[key] = product[key];
        }
    }

    return newObject;
}

let product = {
    price: 100,
    priceTax: 20,
    discount: 5
};

//alias para as propriedades do objeto product
let aliasesProduct = {
    price: "preço",
    priceTax: "taxa imposto",
    discount: "desconto"
};

let specificValue = 5;
let resultFilter = filterProperties(product, specificValue);

// string personalizada
let properties = [];
for (const key in resultFilter) {
    properties.push(`${aliasesProduct[key]}: ${resultFilter[key]}`);
}

console.log(`O novo produto tem as propriedades ${properties.join(', ')}`);
