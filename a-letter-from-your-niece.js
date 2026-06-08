function nonsense(str) {

   word = str.split(/trex|raptor/gi).join('').toLowerCase()
   a = word.replace(/0/gi, 'a')
   e = a.replace(/1/gi, 'e')
   i = e.replace(/2/gi, 'i')
   o = i.replace(/3/gi, 'o')
   u = o.replace(/4/gi, 'u')

    return u.replace(/^.|\si\s/g, val => val.toUpperCase())
            .replace(/\.$/, '') + '.'
}

// alaternatif

function nonsensealternatif(str){
  return str.toLowerCase().replace(/0|1|2|3|4/g, x=>'aeiou'[x])
                              .replace(/trex|\.|raptor|/g, '').replace(/^.| i /g, x=>x.toUpperCase()) + '.'
}
