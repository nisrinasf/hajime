function greetDevelopers(list) {
 list.map(person => {
  person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`
 })

 return list
}
