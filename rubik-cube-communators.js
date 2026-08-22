function createCommutator(a,b) {
  let backwords = []
  
  a.split(' ').reverse().map(function(val){
    if(/'/.test(val)){
        val = val.slice(0,-1)
    }else if(/^[A-Z]$/.test(val)){
        val = val + "'"
    }

    backwords.push(val)
    
  })
  b.split(' ').reverse().map(function(val){
    if(/'/.test(val)){
        val = val.slice(0,-1)
    }else if(/^[A-Z]$/.test(val)){
        val = val + "'"
    }

    backwords.push(val)
    
  })

  return a +' '+ b + ' '+ backwords.join(' ')
}

   
    console.log(createCommutator('R F',"D2 L'")) //"R F D2 L' F' R' L D2"
    console.log(createCommutator('R','U')) // "R U R' U'"
    console.log(createCommutator("F' R U' D", "R U2 F B'")) // "F' R U' D R U2 F B' D' U R' F B F' U2 R'"


// alternatif
function createCommutator(a, b) {
  return [a, b, invertAlgorithm(a), invertAlgorithm(b)]
    .filter(Boolean)
    .join(' ');
}

function invertAlgorithm(algorithm) {
  return algorithm
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .reverse()
    .map(invertMove)
    .join(' ');
}

function invertMove(move) {
  if (move.endsWith("'")) return move.slice(0, -1);
  if (move.endsWith('2')) return move;
  return `${move}'`;
}

// alternatif 2
function invertMove(move) {
  return move.endsWith("2") ? move : move.endsWith("'") ? move.slice(0, -1) : move + "'";
}

function reverseSequence(seq) {
  return seq.split(" ").reverse().map(m => invertMove(m));
}

function createCommutator(a, b) {
  return [...a.split(" "), ...b.split(" "), ...reverseSequence(a), ...reverseSequence(b)].join(" ");
}

// alternatif 3

function createCommutator(a,b) {
  const invert = s => (s.match(/\S+/g) || [])
    .reverse()
    .map(turn => turn.endsWith('2') ? turn : turn.endsWith("'") ? turn[0] : turn + "'")
    .join(' ');
    
  return [a, b, invert(a), invert(b)].filter(Boolean).join(' ');
}

// alternarif 4
const createCommutator = (a,b) => `${a} ${b} ${a.split(" ").reverse().map((a)=>a+"\'").join(" ").replace(/\'\'/g,'').replace(/2\'/g,'2')} ${b.split(" ").reverse().map((a)=>a+"\'").join(" ").replace(/\'\'/g,'').replace(/2\'/g,'2')}`

// alternatif 5

function createCommutator(a, b) {
  const commute = move =>
    (move + "'").replace("''", "").replace("2'", "2");
  const as = a.split(" ");
  const bs = b.split(" ");
  return [...as, ...bs, ...as.map(commute).reverse(), ...bs.map(commute).reverse()].join(" ")
}

// alternarif 6
function reverse(s){
  return s
    .split(' ')
    .reverse()
    .map(s => s.includes('2') ? s : s.at(-1)=="'" ? s.slice(0,-1) : s+"'")
    .join(' ');
}

function createCommutator(a, b) {
  return [a, b, reverse(a), reverse(b)].join(' ');
}

