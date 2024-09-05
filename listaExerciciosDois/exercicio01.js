/*1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.*/

let car = {
    brand : "Renault",
    model : "Sandero",
    year : 2024,
    color : "cinza"
}

//alias para propriedades do objeto car
let aliases = {
    brand: "marca",
    model: "modelo",
    year: "ano",
    color: "cor"
};

for (const key in car) {
   
    console.log(`A propriedade ${aliases[key]} do carro é ${car[key]}`);

}