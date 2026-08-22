function ghostBusters(building) {
  res = building.split(' ')
  return res.length > 1 ? res.join('') : "You just wanted my autograph didn't you?"
}

// readable code
function ghostBusters(building) {
  return /\s/.test(building) ? building.replace(/\s+/g, '') : "You just wanted my autograph didn't you?";
}

console.log(ghostBusters('Coba dulu'))
console.log(ghostBusters('Halooo'))