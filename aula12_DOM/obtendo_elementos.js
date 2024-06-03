

function show() {
    // Obtem um unico elemento pelo id 
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    // obtem todos os elementos
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)


    const contactInputs = document.getElementsByClassName('contact-list')
    console.log(contactInputs)
    
    // obtem unicamente só um elemento
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)


    /**********************************************************************/
    // ESTES DOIS MODOS TRAZEM UMA NodeList
    /**********************************************************************/
    
    // faz a seleção de uma query especifica, igualmente no css
    // selecionando classes do html
    const classes = document.querySelectorAll('.contact')
    // selecionando ID do html
    const id = document.querySelectorAll('#contact-list')
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

}

