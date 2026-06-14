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
