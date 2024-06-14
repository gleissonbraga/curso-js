
// desestrutranod o objeto
const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

// uma forma de acessar
const name = person.name

// outra forma
const { job, parents } = person

console.log(name, job, parents)

// desestruturanod o array
const [father, mother] = parents

console.log(father, mother)

// utilizando a desestruturação nos parametros de uma função

function creatUser(/* normal: person */ {name, job, parents}) {
    const id = Math.floor(Math.random() * 9999)
    return {
        // ANTES
        // id,
        // name: person.name,
        // job: person.job,
        // parents: person.parents

        // DEPOIS DE UTILIZAR A DESESTRUTURAÇÃO
        id,
        name,
        job,
        parents
    }
}

const luke = creatUser(person)

console.log(luke)