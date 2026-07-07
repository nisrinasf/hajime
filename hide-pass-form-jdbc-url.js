
function hidePasswordFromConnection(urlString){
  password = urlString.match(/(password=)([^&]+)(&?)/)
  return urlString.replace(/(password=)([^&]+)(&?)/, '$1'+'*'.repeat(password[2].length)+'$3')
}

// alternatif
function hidePasswordFromConnection(urlString){
  return urlString.replace(/\bpassword=([^&]*)/, (m,p) => 'password=' + '*'.repeat(p.length))
}

hidePasswordFromConnection = (s) =>
  s.replace(/(password=)([^&]+)/, (_,a,b)=>a+b.replace(/./g,'*'))


console.log(hidePasswordFromConnection('jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=END&user=ksdjsldfj'))
console.log(hidePasswordFromConnection('jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345sfasjf789898END'))
console.log(hidePasswordFromConnection('jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=2!34!END!'))
// jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****


// kyu7-regex | replace(func())