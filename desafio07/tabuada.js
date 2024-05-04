let num = parseInt(prompt("Digite o número que deseja: "))
cont = 1


for(cont; cont <= 20; cont++) {
    let conta = num * cont
    alert(`Tabuada:\n` +
        `${num}x${cont} = ${conta}`
        
    )
}