const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [...numerosPares, ...numerosImpares]

const [num1, num2, ...outrosValores] = [1, 2, 3, 4, 5]

const pessoa = { 
    nome: 'Pedro',
    idade: '19'
}

const pessoaComTelefone = {...pessoa, telefone: 97304034}

const { nome } = pessoa

console.log(nome)


function imprimeDados(dados) {
    const {nome, idade} = dados
    console.log(nome, idade)
}

imprimeDados(pessoa)