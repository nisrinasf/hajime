function howMuchCoffee(events) {
let calc = []
 events.map(function(event){
  if(/other/i.test(event)) calc.push(0)
  else if(/^[a-z]+$/.test(event) ) calc.push(1)
  else if(/^[A-Z]+$/.test(event)) calc.push(2)
 })
 res = calc.reduce((acc, val) => acc + val, 0)
 return res < 4 ? res : 'You need extra sleep'

}