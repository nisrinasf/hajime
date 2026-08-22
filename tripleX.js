function tripleX(str){
    return /^[^x]*x{3,}[^x]*/.test(str)
}
console.log(tripleX("abraxxxas")) // true
console.log(tripleX("soft kitty, warm kitty, xxxxx")) // true
console.log(tripleX("xoxotrololololololoxxx")) // false
console.log(tripleX("softx kitty, warm kitty, xxxxx")) // false
console.log(tripleX("Xwarmkittywarm")) // false
console.log(tripleX("kittyXsoftsoft")) // false
console.log(tripleX("xxxkittyxxxX")) // false
