const isValid = query => {
  // don't forget to use FILTERS
}

  let invalidQueries = [
    "anothersite:kitten-home.com intext:kitten",
    "allinurl:69 filterlol:rofl",
    "inuRl:bad_kittens",
    "news:codernews.org"
  ]
  
    let validQueries = [
    "site:kitten-city.com intext:kitten",
    "allintext:kitten dogs animals after:2020",
    "inurl:cats",
    "breaking new site:amazingnew.org"
  ]
  
console.log(isValid(validQueries))
console.log(isValid(invalidQueries))