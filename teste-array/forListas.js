const livros = ["Harry Potter", "Percy Jackson", "O nome do vento", "Tons de Magia", "Rastro de Sangue", "After", "Drácula"];

for (let indice = 0; indice < livros.length; indice++) {
    console.log(`Esse livro é incrível, seu nome é ${livros[indice]}`);
}

for (let item in livros) {
    console.log(` O melhor livro que já li foi ${livros[item]}`);
}

// array.forEach(element => {
    
// });

livros.forEach((elemento) => {
    console.log(`Minha recomendação é ${elemento}`);
} )