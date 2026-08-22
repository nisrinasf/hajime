function digitAll(x){
  if(typeof(x) != 'string') return 'Invalid input !'
  return x.match(/\d/g) ? x.match(/\d/g).join('') : ''
}


console.log(digitAll("are_you_kidding_me_???")) // ''   
console.log(digitAll("wai8, where are you goin'?")) // '8'   
console.log(digitAll("")) // ''   
console.log(digitAll(['yes','i','am','kidding','you','!'])) // 'Invalid input !'   
console.log(digitAll("1 2 3       4")) // '1234'

// alternatif

function digitAll(x) {
  return typeof(x) == 'string' ? x.replace(/\D/g, '') : 'Invalid input !';
}

// \D = selain angka