let nome = "Gleisson"

console.log(nome)
console.error(nome) // trás erro no console na cor vermelha
console.warn(nome) // trás um alerta no console na cor amarela


// window trás um alerta em toda a página por default (não é necessário a utilização do windown)
window.alert(nome) 

// trás um alerta na tela para que possamos digitar algum valor na caixa de alerta
nome = window.prompt("Insira seu nome:")

// CONFIRM trás uma imagem que tras um alerta de confirmação utilizando o boolean
let confirmacao = confirm("Confirma essa ação?")

console.log(nome)
console.log(confirmacao)