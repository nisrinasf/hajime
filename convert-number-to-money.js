var numberToMoney = function(n) {
  let res;
   n.toString().split(/\./).map((money, index, arr) => {
    if(index == 0){
      res = money
          .split('').reverse().join('')
          .match(/\d{0,3}/g).reverse()
          .map(e => e.length > 1 ? e.split('').reverse().join('') : e)
          .filter(e => e)
          .join(',')
    }
    
    else{
      digit = money.slice(0,2).match(/([0-9]?)([^0])/g) || []
      res = digit.length > 0 ? res + '.' + digit.join('') : res 
    }
  })

  return res
 
};

// Alternatif
const numberToMoney = n => (Math.floor(n * 100) / 100).toLocaleString();
//2
var numberToMoney = function(n) {
  return (Math.trunc(n*100)/100).toLocaleString()
};



console.log(numberToMoney(1.0187987)) // 2,546.25
console.log(numberToMoney(1.1067497241248292)) // 2,546.25
console.log(numberToMoney(1.1)) // 2,546.25
console.log(numberToMoney(1.187987)) // 2,546.25
console.log(numberToMoney(1787.187987)) // 2,546.25
console.log(numberToMoney(1.008888)) // 2,546.25

