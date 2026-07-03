function gap(num) {
const number = (num.toString(2).match(/0+1/g) || []).map(num => num.match(/0/g).length)
return number.length > 0 ? Math.max(...number) : 0
}

// alternatif
const gap = num => (num.toString(2).match(/10+(?=1)/g) || [' ']).sort().pop().length - 1;

/**
 * sort() = mengurutkan dari yang besar ke kecih
 * pop() = mengambil satu elemen array dari belakang
 * 
 * contoh = 1000010001
 * match() = [10000, 1000]
 * sort() = [1000, 10000]
 * pop() = 10000
 * length -1 = 5 - 1
 * = 4
 * 
 */

// or
const gap = n => n.toString(2).split('1').slice(0, -1).sort().pop().length;

/**
 * contoh = 1000010001
 * split(1) = ["","0000", "000", ""]
 * slice(0, -1) = ["","0000", "000"]
 * sort() = ["","000", "0000"]
 * pop = 0000
 * length = 4
 */

console.log(gap(9))// 1001 = 2.
console.log(gap(529)) //  1000010001 = 4.
console.log(gap(20)) //  10100  = 1.
console.log(gap(15)) //  1111 = 0
