const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns) // array normal
console.log(...towns) // adicionando operador spread
console.log(...towns[0]) // seria como estivessemos separado console.log(P, R, O, N, T, E, R, A)


// neste quesito ele utiliza a mesma referencia do array towns, assim modificando ambos
const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})



// clonando o array towns
const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({towns, townsCopy, townsClone})


// realizando com objeto
const townsObj = {...towns}
const townsObjClone = {...towns}

// adiciona um atributo no objeto
townsObjClone.test = "Test"
townsObjClone.nome = "José"

console.log({townsObj, townsObjClone})