var translate = function(word) {
  if(word.length < 2) return word
  else if(/^[aiueo]/.test(word[0])) return word + 'ay'
  else return word.slice(1) + word[0] + 'ay' 
}
