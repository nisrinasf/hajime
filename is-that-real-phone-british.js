function validateNumber(str){
return str.match(/^-*(0|\+44)-*(7)-*((\d-*){9})$/) ? 'In with a chance' : 'Plenty more fish in the sea'
}

console.log(validateNumber('07454876120')) // 'In with a chance')
console.log(validateNumber('07454--87--61--20')) // 'In with a chance')
console.log(validateNumber('+44--745---487-6120')) // 'In with a chance')
console.log(validateNumber('0754876120')) // 'Plenty more fish in the sea', 'Number too short')
console.log(validateNumber('0745-487-61-20')) // 'In with a chance')
console.log(validateNumber('+447535514555')) // 'In with a chance')