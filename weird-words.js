
function nextLetter(str) {
  return [...str].map(e => String.fromCharCode(getCharCode(e.charCodeAt(0)))).join('')
}

function getCharCode(index){
  let res;
  if(index == 90){
    res = 65
  }else if(index == 122){
    res = 97
  }else if(index < 65 || index > 122){
    res = index
  }else{
    res = index + 1
  }
  return res
}


function nextLetter(str) {
 return str.replace(/[a-zA-Z]/g, function(c){
       switch (c) {
          case 'z': return 'a';
          case 'Z': return 'A';
          default:  return String.fromCharCode(c.charCodeAt(0) +1);
        }
      
        
    });

}

console.log(nextLetter("My Name Is Zoo"))// "Nz Obnf Jt App");
console.log(nextLetter("What is your name"))// "Xibu jt zpvs obnf")
console.log(nextLetter("zOo"))// "aPp")
console.log(nextLetter('Xibu jt zpvs obnf!'))
console.log('Z'.charCodeAt(0), 'z'.charCodeAt(0), 'A'.charCodeAt(0), 'a'.charCodeAt(0), '!'.charCodeAt(0), String.fromCharCode(122))