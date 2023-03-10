// for
console.time()
const elementos = [1, 2, 3, 4, 5];
for (let i = 0, j = 0; i < elementos.length; i++, j++) {
    console.log(elementos[i] + j);
}
console.timeEnd()


// forOF
console.time()
const itens = [1, 2, 3, 4, 5];
let total = 0;
 
for(let elemento of itens) {
    total += elemento;
}

console.log(total)
console.timeEnd()

// ForEach
console.time()
const lista = [1, 2, 3, 4, 5];

let soma = 0;

lista.forEach(numero => soma += numero);

console.log(soma);
console.timeEnd()