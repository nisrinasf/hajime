function evenator(str) {
  const res = str.replace(/[,.?!_]/gi, '')
  .split(' ')
  .map(function(val, i, arr){
     if(val.length % 2 == 1){
        val += val.slice(-1)
      }
     return val
     })

  return res.join(' ')
}
   console.log(evenator('yU P yBl YPv dxY grpt xy KFfoW  xMxWOr'))
   console.log(evenator('halo a ban'))
   console.log(evenator('halo a  ban'))
    console.log(evenator('halo a   ban'))
    console.log(evenator(' halo a  ban'))
    console.log(evenator('underscore is not considered a word_in this case'))
    console.log(evenator('I got aa hole in 1'))
    console.log(evenator('')) //'','Should return empty'
    console.log(evenator('tHiS sEnTeNcE iS eVeN.')) //'tHiS sEnTeNcE iS eVeN','This sentence is even so return as is'
    console.log(evenator('even')) //'even','This sentence is even so return as is')
    console.log(evenator('even od!')) //'even od','This sentence is even so return as is'
    console.log(evenator('even oddd.')) //'even oddd','This sentence is even so return as is'
    console.log(evenator('underscore is not considered a word..in this case,')) // 'underscore is nott considered aa wordin this case'


   console.log(evenator('f')) //'ff',''
   console.log(evenator('I got a hole in 1!')) //'II gott aa hole in 11',''
   console.log(evenator('evenn')) //'evennn','')
   console.log(evenator('even odd!')) //'even oddd',''
   console.log(evenator('eve odd.')) //'evee oddd',''