function nbrValidTickets(tickets){
 let count = 0;
 tickets.map(function(ticket){
    /^[a-z]\d[a-z]{4}$/gi.test(ticket) && count++
 })
 return count
}

// alternatif
function nbrValidTickets(tickets){
 return tickets.filter(x => /^[a-z]\d[a-z]{4}$/i.test(x)).length;
}

console.log(nbrValidTickets( ["A9JZOD","E9FIDH","SI2JIS","F8JIODJ","FDSNJA","A9POF?","AA9DIJD"])) // valid tiket number = 2
/**
* Berisi tepat 6 karakter
* Berisi: satu huruf kemudian satu angka kemudian 4 huruf
* 'huruf' berarti satu karakter tunggal, tanpa aksen, huruf besar atau kecil, antara a dan z.
 */