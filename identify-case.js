function id(c_str) {
  if(/^([a-z]+-[a-z]+)+$/g.test(c_str)) return "kebab"
  else if(/^([a-z]+)([A-Z][a-z]*)+$/g.test(c_str)) return "camel"
  else if(/^([a-z]+_[a-z]+)+$/g.test(c_str)) return "snake"
  else return "none"
}

console.log(id("dvrhAzdr_dkzv_tdpi-wotbw--jtdhsA-")) // "none")
console.log(id("hello-world")) // "kebab")
console.log(id("hello-to-the-world")) // "kebab")
console.log(id("hello_world")) // "snake")
console.log(id("hello_to_the_world")) // "snake")
console.log(id("helloWorld")) // "camel")
console.log(id("helloToTheWorld")) // "camel")
console.log(id("zlspiPbaEaizQBziciUoav")) // "camel")
console.log(id("hello-World")) // "none")
console.log(id("hello-To-The-World")) // "none")
console.log(id("good-Night")) // "none")
console.log(id("he--llo")) // "none")

/**
*Beberapa definisi:
*Kebab case: kata-kata huruf kecil dipisahkan oleh tanda hubung
*Camel case: kata pertama huruf kecil diikuti oleh kata-kata huruf * *kapital
*Snake case: kata-kata huruf kecil dipisahkan oleh garis bawah
 */