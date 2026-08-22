function onePunch(items){
  return typeof(items) == 'string' && items ? items.split(' ').sort().join(' ').replace(/[ae]/gi, '') : 'Broken!'
} //Don't leave this line!!


console.log(onePunch('Beard Knife Grenade Motorbike Hat')) //'Brd Grnd Ht Knif Motorbik'
console.log(onePunch('Horse Rope Cups Car Beard')) //'Brd Cr Cups Hors Rop'
console.log(onePunch('Friend Beer Beard Monkey Laptop')) // 'Brd Br Frind Lptop Monky'
console.log(onePunch('')) // 'Broken!'
console.log(onePunch([])) // 'Broken!'
console.log(onePunch(["one", "two"])) // 'Broken!'
