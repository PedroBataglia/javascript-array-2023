const notas = [10, 6.5, 8, 7.5];
let total = 0

for (i = 0; i < notas.length; i++) {
     total += notas[i];
}

const media = total/notas.length
console.log(media)