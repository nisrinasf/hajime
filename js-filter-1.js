 function searchNames( logins ){
    return logins.filter(login => /^.+_$/.test(login[0]))
}

 let a = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ], [ "bar2_", "bar@bar.com" ] ],
    b = [ [ "bar_", "bar@bar.com" ] ]; 

console.log(searchNames(a))
console.log(searchNames(b))