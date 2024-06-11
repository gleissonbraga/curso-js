
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

function creatUser(person) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name: person.name,
        job: person.job,
        parents: person.parents
    }
}

const luke = creatUser(person)

console.log(luke)