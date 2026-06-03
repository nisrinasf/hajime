function isLochNessMonster(s) {
  let pattern = /tree fiddy|3\.50|three fifty/gi
  return pattern.test(s) 
}

console.log(isLochNessMonster("Hello, I come from the year 3150 to bring you good news!"))
/**
 * 
 * Hari ini belajar
 * pattert menggunakan dot/titik(.) sebagai pemisah karakter bebas
 * contoh 
 * pattern /h.t/
 * match dengan kata 'hot', 'hat', 'hut'
 * 
 * Maka jika dalam pattern terdapat karakter titik maka menggunakan (\.)
 * g = global, dalam satu baris bisa mengambil keluaran lebih dari satu kata yang cocok
 * i = insensitive case, tidak memperdulikan besar kecil huruf
 * 
 */
