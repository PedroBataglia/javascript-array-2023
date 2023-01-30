const livros = ["Harry Potter", "Percy Jackson", "O nome do vento", "Tons de Magia", "Rastro de Sangue", "After", "Drácula"];
const escolha = 2;

switch (escolha) {
    case 0:
        for (let i = 0; i < livros.length; i++) {
            console.log(`Lista por For simples, livro: ${livros[i]}`)
        };
        break;
    case  1:
        for (let item in livros) {
            console.log(`Lista por ForIn, livro: ${livros[item]}`)
        }
        break;
    case 2:
        livros.forEach((livro) => console.log(`Lista por ForEach, livro: ${livro}`));
        break;
}
