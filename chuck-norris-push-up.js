function chuckPushUps(string) {
  if (!string || typeof(string)!='string') return 'FAIL!!';
  if (string.match(/[01]+/gi) == null) return 'CHUCK SMASH!!';
  const results = string.split(' ').map(e => parseInt(e.replace(/[^01]/gi, ""), 2)).filter(e => !isNaN(e))
  return Math.max(...results)      
}
/**
 * Jika ada input bukan string kembalika "FAIL!!"
 * Jika ada input hanya string tanpa angka kembalikan "CHUCK SMASH!!"
 * Your code should still pass in the case that the binary is mixed up with other characters - maybe Chuck has a cough... e.g.: "1ee1gf00t10h1011tr00" -> "110010101100" -> 3244.
 */

console.log(chuckPushUps('1001 "alkdfjklsdfjsd" 1000 "dkfjsdlafj" 100000 10111 10011')) // 16
console.log(chuckPushUps('1011 110010101100')) // 23
console.log(chuckPushUps('Chuck is winding up a left!')) // CHUCK SMASH!!
console.log(chuckPushUps(1)) // FAIL!!
console.log(chuckPushUps([])) // FAIL!!
console.log(chuckPushUps('')) // FAIL!!


