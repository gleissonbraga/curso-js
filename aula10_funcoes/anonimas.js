
// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores
// Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome

function somar(a, b) {
    return a + b
}

const operacao = somar
console.log(operacao(4,5))


operacao = function (a, b) {
    return a - b
}

console.log(subtrair(4, 5))



// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo()
oiMundo()

function olaMundo() {
  console.log("Olá, mundo!")
}

const oiMundo = function () {
  console.log("Oi, mundo!")
}