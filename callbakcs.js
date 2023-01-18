const nomes = ["Pedro", "Maria", "Camille"];

nomes.forEach(function (nome) {
    console.log(nome)
})

nomes.forEach((nome) => { 
    console.log(nome)
})

function imprimeNomes(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNomes);