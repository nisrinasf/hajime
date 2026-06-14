function checkRoot(string){

   newString = string.split(/,/).map(e => parseInt(e)) 

  if(/^([1-9]{1}\d*?,?){4}$/.test(string)){
     square  = newString.reduce((acc, val) => acc*val) + 1
     cekOrder = newString.every((e,i,arr) => i < 3 ? arr[i] == arr[i+1] -1 : arr[i] == arr[i-1] + 1 )
     result = square + ', ' + Math.sqrt(square)
     return !cekOrder || /\d*,\d*/g.test(Math.sqrt(square)) ? 'not consecutive' : result
  }else{
      return  'incorrect input'  
  }      

//alternatif (part some)
function checkRoot(string) {
  var parts = string.split(",")
  if (parts.length != 4 || parts.some(isNaN)) return "incorrect input"
  if (parts.some((x, i) => i > 0 && x - parts[i - 1] != 1)) return "not consecutive"
  var n = parts.reduce((n, x) => n * x, 1) + 1
  var p = Math.sqrt(n)
  return `${n}, ${p}`
}
