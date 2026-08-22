function explode(s) {
res = []
s.split('').map(function(number, index){
    for(let i = 0; i < number; i++){
        res.push(number)
    }
  })

  return res.join('')
}

console.log(explode('321')) // 333221
console.log(explode('142')) // 1444422

// alternatif
const explode = s => s.replace(/\d/g, d => d.repeat(d));
