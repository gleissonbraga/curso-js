let carro1 = prompt("Nome do carro: ")
let velocidade_carro1 = parseFloat(prompt("Velocidade carro: "))
let carro2 = prompt("Nome do carro: ")
let velocidade_carro2 = parseFloat(prompt("Velocidade carro: "))

if(velocidade_carro1 > velocidade_carro2) {
    alert(`O ${carro1} é mais rápido`)
} else if (velocidade_carro1 < velocidade_carro2) {
    alert(`O ${carro2} é mais rápido`)
} else {
    alert("A velocidade de ambos são iguais")
}