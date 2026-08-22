function calculate(string) {
let res =  string.match(/(\d+)|(loses|gains)/g).sort().reverse()
return res[0] == 'gains' ? parseInt(res[1]) + parseInt(res[2]) : Math.abs(parseInt(res[1] - res[2]))

}

// loses dikurangi)
// gains ditambah

// alternatif

function calculate(string) {
  return eval(string.match(/\d+|lose|gain/g).join("").replace("lose", "-").replace("gain", "+")) 
}

console.log(calculate("Panda has 48 apples and loses 4")) //  44
console.log(calculate("Jerry has 34 apples and gains 6")) //  40