let countCombinations = function(string, key){
   return string.match(new RegExp(key, "gi"))?.length || 0
}

console.log(countCombinations('my name is billy and billy is awesome', 'billy')); // 2
console.log(countCombinations('abcdefghijklmonopolymonorailqrstuv', 'mono')); // 2
console.log(countCombinations('GrEggreGGREGgREG', 'greg')); // 4
console.log(countCombinations('@#$##@@@','@')); // 4
console.log(countCombinations('wow nothing', 'yeah')); // 0
console.log(countCombinations('lololololol', 'lol')); // 3
console.log(countCombinations('93049', '\\d')); // 5
console.log(countCombinations('Five ', '\.')); // 5