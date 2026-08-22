function dadFilter(str){
return str.replace(/,+/g, ',').replace(/,\s?$/g, '')
}

console.log(dadFilter("all this,,,, used to be trees,,,,,,"))
console.log(dadFilter("i,, don't believe this round earth,,, show me evadence!!"))
console.log(dadFilter("ahsflsdhldsk,,,, skdfjlsdlkfjsdfj,, "))

// alternatif

function dadFilter(str) {
  return str.replace(/\B,|[, ]+$/g, '');
}

/**
 * \B, = bukan permulaan kata dari koma
 * contoh = "all this,,,, used to be trees"
 * match = semua tanda koma selain satu koma yang paling akhir [,,,]
 * 
 * [, ] = semua tanda koma yang memiliki whitespace atau tidak lebih dari 1 di akhir kalimat
 * consoh = "contoh = all this,,,, used to be trees,,, "
 * consoh2 = "contoh = all this,,,, used to be trees,,,"
 * match = [,,, ]
 * match2 = [,,,]
 */