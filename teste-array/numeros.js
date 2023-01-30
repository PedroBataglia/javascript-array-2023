const numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
const index = numeros.indexOf(3);

if (index > -1) {
    numeros.splice(index, 1);
}

console.log(numeros)