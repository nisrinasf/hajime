function getFirstPyhton(list){
 let result = 'There will be no Python developers'
 let count = 0;
 list
   .map((person, index) => {
     if(count < 1){
        if(person.language == 'Python'){
        count++
        result = person.firstName + ', ' + person.country
        }
    }
  })
return result
}

// alternatif
function getFirstPython(list) {
  var res = list.find(x => x.language=='Python');
  return res ? res.firstName+', '+res.country : 'There will be no Python developers';
}

// findIndex mengembalikan index array
// find mengembalian satu objek penuh 
