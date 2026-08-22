var reg = /"[\w\s.',]+"/gi;
function getQuotes(string) {
  return string.match(reg);
}

console.log(getQuotes('"Winners never quit and quitters never win." - Vince Lombardi, "My motto is, \'Never quit.\'." - Henry Rollins , "Winners never quit and quitters never win." - Voba'))
console.log(getQuotes('("hello", "g")'))