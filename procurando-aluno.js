const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias =[10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado`);
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        console.log(indice);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João")