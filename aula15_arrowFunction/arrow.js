function normalSum(a,b) {
    return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`)


const anonymousSum = function (a, b) {
    return a + b
}
    
console.log(`Soma anonima: ${normalSum(2, 2)}`)

const arrowSum = (a, b) => {
    return a + b
}

console.log(`Soma arrow function: ${arrowSum(2, 2)}`)


const subtract = (a, b) => a - b

console.log(`Subtração: ${subtract(2, 2)}`)


// função arrow sem parametro
const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21
console.log(double(number))


// onde as arrow function são mais utilizadas (HOF, arrays, map, filter, reduce)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen']

const startingWithP = towns.filter(town => town[0] === 'P')

console.log(startingWithP)