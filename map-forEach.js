const notas = [10, 9.5, 8, 7, 6];
let i = 0;
notas.forEach(nota => {
    notas[i] = nota + 1
    i++;
});
console.log(notas)