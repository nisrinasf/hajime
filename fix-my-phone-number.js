function isItANum(str) {
number = (str.match(/\d/g) || [])
return number[0] == 0 && number.length == 11 ? number.join('') : "Not a phone number"
}


console.log(isItANum("S:)0207ERGQREG88349F82!efRF)")) // "02078834982"
console.log(isItANum("sjfniebienvr12312312312ehfWh")) // "Not a phone number"
console.log(isItANum("0192387415456")) // "Not a phone number"
console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165")) // "02084564165"
console.log(isItANum("stop calling me no I have never been in an accident")) // "Not a phone number"

// alternatif
const isItANum = str =>(str.replace(/\D/g,'').match(/^0\d{10}$/) || ['Not a phone number'])[0];

/**
 * contoh = "S:)0207ERGQREG88349F82!efRF)"
 * replace(/\D/g, '') = hapus semua karakter selain angka = 02078834982
 * match(^0\d{10}$) = awal baris 0 diikuti 10 angka bebas = ['02078834982']
 * [0] = 02078834982
 * 
 * contoh = sjfniebienvr12312312312ehfWh
 * replace() = 12312312312
 * match() = null =>  ['Not a phone number']
 * [0] = 'Not a phone number'
 * 
 */