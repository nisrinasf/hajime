function buildInvertedIndex(collection, term, caseSensitive, exactMatch) {
let results = []

flag = caseSensitive ? 'g' : 'gi'
pattern = exactMatch ? '\\b'+term+'\\b' : term

collection.filter(function(value, index){
     if(value.match(new RegExp(pattern, flag))){
        results.push(index + 1)
    }
  })
   
return results
}       
       

       
console.log(buildInvertedIndex(['Hello there', 'general kenobi'],'hello', true, false)) //[]
console.log(buildInvertedIndex(['Lorem Ipsum Dolor', 'Hodor Dolor Hodor', 'Dolormiten are not a thing'],'holor', true, false)) //[]
console.log(buildInvertedIndex(['hello there', 'general kenobi'],'Hell', false, true)) //[])
console.log(buildInvertedIndex(['hello there', 'gEnErAl kenobi'],'general', true, false)) //[]
console.log(buildInvertedIndex(['!hellos there', 'general kenobi'],'Hello', false, true)) //[])
console.log(buildInvertedIndex(['hello there', 'general kenobi'],'Hello', true, false)) // [])
console.log(buildInvertedIndex(['hello there', 'general kenobi'],'hello', true, false)) //[1]
console.log(buildInvertedIndex(['hello there', 'general kenobi'],'kenobi', true, false)) //[2]
console.log(buildInvertedIndex(['Lorem Ipsum Dolor', 'Hodor Dolor Hodor', 'Dolormiten are not a thing'],'Dolor', true, false)) //[1,2,3]
console.log(buildInvertedIndex(['hello there', 'general kenobi'],'Hello', false, false)) // [1])
console.log(buildInvertedIndex(['Rumpel Dumpel','Holger', 'Quadrumpel'],'UmPeL', false, false)) // [1,3])
console.log(buildInvertedIndex(['hellos there', 'general kenobi'],'Hello', false, false)) // [1])
console.log(buildInvertedIndex(['hello there', 'general kenobi'],'Hell', false, false)) // [1])

console.log(buildInvertedIndex(['hello. there', 'general kenobi'],'hello', 
    true, true)) //[1])
console.log(buildInvertedIndex(['Im Wald gibts nicht viel zu tun', 'Oooh du schoener Westerwald'],'wald', 
    false, true)) //[1])
    
