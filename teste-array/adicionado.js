const pessoas = ["Pedro", "Ana", "Carlos", "João", "Carla", "Paulo", "Emanuel", "kami"]

const index = pessoas.indexOf("kami");

console.log(index);

// pessoas.splice(4, 1)

pessoas.splice(index, 1)



pessoas.push("Manuela")
console.log(pessoas)