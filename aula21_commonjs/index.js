// index.js
// chama o arquivo que foi exportado para ser executado no local desejado
const render = require("./render")
const store = require("./store")

console.log("Aplicação iniciada.")
render()
store()
console.log("Aplicação finalizada.")