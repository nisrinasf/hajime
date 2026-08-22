function purifyTheStratholme(s) {
  return s.replace(/\si\w|\wi\s/gi, ' ')
          .replace(/[^i]?i[^i]?/gi, '')
          .replace(/^\s+|\s+$/, '')
          .replace(/\s\s/g, ' ')
}

// alternatif
function purifyTheStratholme(s) {
  return s.replace( /.?i+.?/gi, '').trim();
}
function purifyTheStratholme(s) {
  return s.replace(/\w?i+\w?/gi,'')
          .trim()
          .replace(/ +/g,' ')
}



console.log(purifyTheStratholme("STRING"))                      //"STG"
console.log(purifyTheStratholme("1i2 33 i4i5 i555ii5"))         //"33 5"
console.log(purifyTheStratholme("It is a bit chilly"))          //"a cly" 
console.log(purifyTheStratholme("Pineapple pizza is delicious"))//"eapple za deus"
console.log(purifyTheStratholme("It is not there"))             //"not there"
console.log(purifyTheStratholme("N"))            

// trim func()