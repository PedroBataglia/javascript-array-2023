const notas = [10, 9, 4, 15, 7, 8];

console.log(notas);

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 10) {
        notas.splice(i, 1);
    }
};

console.log(notas);

