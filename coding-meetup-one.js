function countDevelopers(list) {
  let count = 0;
  list.map(person => {
    if(person.continent == 'Europe' && person.language == 'JavaScript'){
      count++
    }
  })

  return count
}
