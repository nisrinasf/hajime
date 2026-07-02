function remove (string) {
  return string.replace(/(\w)(!+)/gi, '$1')
}
console.log(remove("Hi!")) //"Hi"
console.log(remove("!!!Hi !!hi!!! !hi")) //"!!!Hi !!hi !hi"
console.log(remove("!Hi!")) //"!Hi"
console.log(remove("Hi! Hi!")) //"Hi Hi"
console.log(remove("!Hi")) //"!Hi"
console.log(remove("Hi!!!")) //"Hi"