function initials(n){
  return n.match(/\b[a-z]/gi).join('.').toUpperCase() + n.match(/\B[a-z]+$/g)
}
console.log(initials('code wars'))
console.log(initials('Barack hussein obama'))

/**
 * "code wars"            ---> "C.Wars"
 * "Barack hussein obama" ---> "B.H.Obama"
 */
