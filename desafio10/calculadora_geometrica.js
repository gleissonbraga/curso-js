function areaDoTriangulo() {
    const base = prompt("Informe a base do triângulo: ")
    const altura = prompt("Informe a altura do triângulo: ")
    return (base * altura) / 2

}

function areaDoRetangulo() {
    const base = prompt("Informe a base do retângulo: ")
    const altura = prompt("Informe a altura do retângulo: ")
    return base * altura
}

function areaDoQuadrado() {
    const lado = prompt("Informe o lado do quadrado: ")
    return  lado * lado
}

function areaDoTrapezio() {
    const baseMaior = parseFloat(rompt("Informe a base maior do trapézio: "))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio: "))
    const altura = prompt("informe a altura do trapézio: ")
    return (baseMaior + baseMenor) * altura / 2
}

function areaDoCirculo() {
    const raio = prompt("Informe o raio do círculo: ")
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch(opcao) {
            case "1":
                resultado = areaDoTriangulo()
                break
            case "2":
                resutado = areaDoRetangulo()
                break
            case "3":
                resultado = areaDoQuadrado()
                break
            case "4":
                resultado = areaDoTrapezio()
                break
            case "5":
                resultado = areaDoCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida.")
        }
        
        if(resultado) {
            alert("Resultado: " + resultado)
        }

    } while(opcao !== "6")
}

executar()