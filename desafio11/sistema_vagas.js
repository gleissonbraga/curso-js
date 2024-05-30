const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga: ")

    const confirmacao = confirm(
        "deseja criar uma nova vaga com essas informações?\n" + 
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if(confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice + 
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite + 
        "\nQuantidade de candidatos: " + vaga.candidatos.length + 
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    
}