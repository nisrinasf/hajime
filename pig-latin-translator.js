var translate = function(word) {
  if(word.length < 2) return word
  else if(/^[aiueo]/.test(word[0])) return word + 'ay'
  else return word.slice(1) + word[0] + 'ay' 
}
// bestpractice
word.length > 1 ? word.replace(/([^aeiou]?)(\w+)/, '$2$1ay') : word

/**
 * Penjelasn Group 1 ([^aiueo]?)
 * [] = karakter set
 * ^ di dalam [] = negasi (bukan)
 * aeiou = huruf vokal
 * JADI : berarti satu karakter yang bukan a, e, i, o, atau u.
 * 
 * Tanda ?
 * JADI : artinya 0 atau 1 karakter konsonan.
 * | Input | Group 1  |
 * | ----- | -------- |
 * | dog   | d        |
 * | cat   | c        |
 * | apple | (kosong) |
 *
 * Group 2 (\w+)
 * huruf (a-z, A-Z)
 * angka (0-9)
 * underscore (_)
 * 
 * Tanda +
 * JADI : berarti satu atau lebih. (menangkap sisa kata.)
 * 
 * Kata pengganti '$2$1ay'
 * $1 = isi group 1
 * $2 = isi group 2
 * 
 * JADI : group2 + group1 + "ay"
 * 
 * jika terdapat huruf konsonan 1 maka ganti dengan group 2 (sisa kata) + group 1 (huruf konsonan)
 * jika terdapat huruf konsonan 0 (huruf vokal) maka ganti dengan group 2 (sisa kata) + group 1 (koson)
 */
