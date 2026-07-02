function dadFilter(str){
return str.replace(/,+/g, ',').replace(/,\s?$/g, '')
}

console.log(dadFilter("all this,,,, used to be trees,,,,,,"))
console.log(dadFilter("i,, don't believe this round earth,,, show me evadence!!"))
console.log(dadFilter("ahsflsdhldsk,,,, skdfjlsdlkfjsdfj,, "))