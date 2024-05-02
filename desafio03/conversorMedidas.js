const num = parseFloat(prompt("Digite o número"))
const medidas = prompt(
    "Transformar para\n" +
    " 1 - Milímetro\n" +
    " 2 - centimetrp\n" +
    " 3 - decimetro\n" +
    " 4 - decametro\n" +
    " 5 - hectometro\n" +
    " 6 - quilometo\n"
)

switch(medidas) {
    case "1":
        let calculo = num * 1000
        alert(calculo)
        break
    case "2":
        let calculo2 = num * 100
        alert(calculo2)
        break
    case "3":
        let calculo3 = num * 10
        alert(calculo3)
        break
    case "4":
        let calculo4 = num / 10
        alert(calculo4)
        break
    case "5":
        let calculo5 = num / 100
        alert(calculo5)
        break
    case "6":
        let calculo6 = num / 1000
        alert(calculo6)
        break
    default:
        alert("Opção inválida")
}