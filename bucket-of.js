function bucketOf(str) {
  let water = /water|wet|wash/gi.test(str)
  let slime = /slime|i don't know/gi.test(str)
  
  if(water&&slime) return 'sludge'
  else if(water)   return 'water'
  else if(slime)   return 'slime'
  else             return 'air'
}
