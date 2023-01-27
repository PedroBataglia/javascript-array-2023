const numeros = [100, 200, 300, 400, 500, 600];

// primeira expressão: é executada apenas uma vez
// segunda expressão: condição de execução
// terceira expressão: é executada sempre ao final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

for ( let i = numeros.length; i > 0; i--) {
    console.log(` O ${i}ºn é ${numeros[i-1]}`);
}