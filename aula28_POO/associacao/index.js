const Address = require('./Address')
const Person = require('./Person')

const abbr = new Address("7 de Setembro", 99, "Centro", "Porto Alegre", "RJ")
const john = new Person("John Doe", abbr)

console.log(john)
console.log(john.address.fullAddress())