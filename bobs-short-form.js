function shortForm(str) {
  return str.replace(/(^[aiueo]?)|([aiueo]?$)|([aiueo])/gi, '$1$2')
}
// hapus huruf vokal selain di depan dan belakang
console.log(shortForm("amazing")) //amazng
console.log(shortForm("assauolta")) // asslta
console.log(shortForm("thypodoha")) //thypdha
console.log(shortForm("aitaai")) // ati

// alternatif
function shortForm(str) {
  return str.replace(/\B[aeiou]\B/gi,'')
}
