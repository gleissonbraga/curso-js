const arr = [
    "1º Nível",
    ["2º Nível", 42, tru],
    [
        ["3º Nível", "1º Nível", "Olá, mundo!" ],
        ["3º Nível", "2º Nível", "Olá, mundo!" ],
    ],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2])
console.log(arr[2][1][0])


const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]


  matriz.push(["Nova linha"]) // adiciona no final da matriz
  matriz[0].push("Nova coluna") // adiciona dentro do array especificado da matriz
  
  console.table() // tráz em tabela a matriz


// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const elemento = matriz[i][j]
      console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
  }