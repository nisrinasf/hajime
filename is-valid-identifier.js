function isValid(idn) {
  return /^[a-z_$][a-z_$0-9]*$/gi.test(idn)
}
// huruf pertama = alphabet, _, $
// Diikuti = alphabet, _, $, angka

console.log(isValid('i')) // true
console.log(isValid('wo_rd'))
console.log(isValid('b2h'))
console.log(isValid('1i')) // false
console.log(isValid('wo rd'))
console.log(isValid('!b2h'))