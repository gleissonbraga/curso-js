let qntd_inicial = parseFloat(prompt("Digite a quantidade inicial de dinheiro: "))
let cont = 1

while (cont > 0) {
    const menu = prompt("Dinheiro: " + qntd_inicial + "\n" +
            "1 - Adicinar dinheiro \n" +
            "2 - Remover dinheiro\n" +
            "3 - Sair"
    )
    
    if(menu == "3") {
        break
    }

    switch(menu){
        case "1":
            let adicionar = parseFloat(prompt("Quanto deseja adicionar: "))
            qntd_inicial = adicionar + qntd_inicial
            break
        case "2":
            let remover = parseFloat(prompt("Quanto deseja remover: "))
            qntd_inicial = remover - qntd_inicial
            break
    }

    
    cont++
}