function conjugate(verb){
const suffixAr = ['o', 'as', 'a', 'amos', 'áis', 'an']
const suffixEr = ['o', 'es', 'e', 'emos', 'éis', 'en']
const suffixIr = ['o', 'es', 'e', 'imos', 'ís', 'en']

 let suffix = verb.match(/(ar|ir|er)/gi)[0]
     word = verb.replace(/(ar|ir|er)/gi, '')

     result = []

     if(/ar/i.test(suffix)){
      suffixAr.map(e => result.push(addSuffix(word, e)))
    }
     if(/er/i.test(suffix)){
      suffixEr.map(e => result.push(addSuffix(word, e)))
    }
     if(/ir/i.test(suffix)){
      suffixIr.map(e => result.push(addSuffix(word, e)))
    }

return {[verb] : result}
}
function addSuffix(word, suffix){
    return word.concat(suffix)
}

console.log(conjugate('Caminar'))
console.log(conjugate('Comer'))
console.log(conjugate('Vivir'))


// alternatif
function conjugate(verb){
  const dic = { 'ar':['o','as','a','amos', 'áis','an'],
                'er':['o','es','e','emos', 'éis','en'],
                'ir':['o','es','e','imos', 'ís', 'en']};

  return { [verb]: dic[verb.slice(-2)].map(e=> verb.slice(0,-2)+e) };
}

/**
 * contoh : caminar
 * dic[verb.slice(-2)] = dic[ar]
 * .map(e => ver.slice(0, -2) + e) = camin + ('o','as','a','amos', 'áis','an')
 */