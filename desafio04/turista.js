let nome = prompt("What's your name? ")
let continuar = prompt("Which city did you visit? (yes/no)")
let cidades = ""
let contagem = 0

while (continuar === "yes") {
    let cidade = prompt("Which city: ")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Which city did you visit? (yes/no)")
}

alert(
    "Turista: " + nome +
    "\nQuantidade de cidades visitdas = " + contagem + 
    "\nCidades visitadas:\n" + cidades
)