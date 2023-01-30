let estados = ["RJ", "MG", "SP", "SC", "SP", "SP", "PR", "PE", "PA"];

let estados_novo = [];

estados.forEach((item) => {

    if (!estados_novo.includes(item)) {

        estados_novo.push(item);
    }
});

estados = estados_novo;

console.log(estados);