const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }

//   console.log(user.friends[0].phone.ddd)  FORMA ERRADA

// O operador '?' faz a operação opcional sendo colocado antes do ponto e faz a verificação se tal valor existe e não retorna erro
  console.log(user?.friends[0]?.phone?.ddd)
  console.log(user?.brothers?.length)
  
  console.log(user?.brothers?.[5].name)
