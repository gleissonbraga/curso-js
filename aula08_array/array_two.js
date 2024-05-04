const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// adicionar elementos no final do array
// push
arr.push("Boromir")

// adiciona elementos no inicio do array
// unshift
arr.unshift("Boromir")

// remove o ultimo elemento do array
//pop
arr.pop()

// remove o pimeiro elemento do array
// shift
arr.shift()

// pesquiser por um elemento
// includes
const inclui = arr.includes("Gandalf")

// usado para saber qual indice do elemento
// indexOf
const indice = arr.indexOf("Gandalf")

// cortar e Concatenar o array

//corta
// slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)

// concatena
// concat
const sociedade = hobbits.concat(outros, "Boromir")

// Substituição dos elementos
// splice
const elemetoRemovido = sociedade.splice(indice, 1, "Gandalf o Cinzento")

// Iterar sobre os elementos do array
for(let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice];
    console.log(elemento + " Se encontra na posição " + indice)
}