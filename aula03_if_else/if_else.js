
// operador ternário
const resultado = (6 === 6) ? "verdadeiro" : "Falso"
console.log(resultado)

// estrutura condicional if/else
const idade = prompt("Informe a sua idade: ")

if(idade > 18) {
    alert("Você é maior de idade")
} else if (idade > 12) {
    alert("Você é menor de idade")
} else if (idade > 4) {
    alert("Você é criança")
} else {
    alert("..")
}

