function validateBase(num, base) {
 return num.split('').every((e) => parseInt(e, 36) < base)
}


// parseInt() = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// parseInt('A', 16) nilai A pada basis 16 (hexadesimal) menghasilkan nilai 10
