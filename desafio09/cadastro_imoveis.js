
const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Imóveis: " + imoveis.length +
        "\nEscolha uma opção\n" + 
        "1. Adicionar um imóvel\n" + 
        "2. Mostrar todos os imóveis\n" +
        "3. Sair"
    )

    switch (opcao){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Nome do proprietário: ")
            imovel.qntd_quartos = prompt("Quantidade de quartos: ")
            imovel.qntd_banheiros = prompt("Quantidade de banheiros: ")
            imovel.garagem = prompt("Possui garagem? (Sim/Não)")
            
            const confirmacao = confirm(
                "Salvar este imóvel?\n" + 
                "\nProprietário" + imovel.proprietario +
                "\nQuartos: " + imovel.qntd_quartos +
                "\nBanheiros: " + imovel.qntd_banheiros +
                "\nGaragem: " + imovel.garagem
            )

            if(confirmacao) {
                imoveis.push(imovel)
            }

            alert("Imóvel salvo com sucesso")

            break
        case "2":
            for(let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) + 
                    "\nProprietário: " + imoveis[i].proprietario + 
                    "\nQuartos: " + imoveis[i].qntd_quartos +
                    "\nBanheiros: " + imoveis[i].qntd_banheiros +
                    "\nGaragem: " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
    }

} while(opcao !== "3")

