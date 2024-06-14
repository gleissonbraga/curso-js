// quando utilizamos o operador spread em um parametro o javascript entende que pode ser um array e deixa
// utilizar funções do array tais como (reduce, push, pop...), que são são reservadas do array


// no parametro deve sempre se usar o spread no final dos parametros: exemplo CORRETO (soma, ...num), ERRADO (...num, soma)
function sum(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2, 2))
console.log(sum(32, 20, 50, 80, 70))