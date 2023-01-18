const nomeAluno = prompt('Qual o nome do aluno?');
const idadeAluno = prompt('Qual a idade do aluno?');
const quantidadeDeNota = prompt('Quantas notas você gostaria de adicionar? (responda em número)');
const notas = []
let somaDasNotas = 0;

for (i = 0; i < quantidadeDeNota; i++) {
        notas.push(Number(prompt(`Digite o valor da ${i+1}º nota!`)))
        somaDasNotas += notas[i];
}

const media = somaDasNotas/notas.length;

alert(`A média do aluno ${nomeAluno}, de ${idadeAluno} anos foi de ${media.toFixed(2)}. Seus valores idividuais foram ${notas}`)
