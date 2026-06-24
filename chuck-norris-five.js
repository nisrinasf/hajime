function bodyCount(code) {
  return /(\b([A-Z]\d)+(\.-[A-Z]%\d\.\d+\.))/g.test(code)
}
console.log(bodyCount('A2B8T1Q9W4.-F%5.34.')) // true
console.log(bodyCount('asdfsjfsdfjl A2B8T1Q9W4.-F%5.34.kjsadfjsldkfj  A2B8T1Q9W4.-F%5.34.')) // true
console.log(bodyCount('P6A6T5F5S3.-Z%1.11.')) // true
console.log(bodyCount('a2B8T1Q9W4.-F%5.34.')) // false (small letter)
console.log(bodyCount('A2B8T1Q9W4.-F%5.3B.')) // false (last char should be number)
console.log(bodyCount('A2B8T1Q9W4.£F&5.34.')) // false; (symbol changed from - and %)

