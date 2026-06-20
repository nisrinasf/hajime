function whichPostcode(postcode){
   if(/^\s*[a-z]{1,2}\d{1,2}\s{1}\d{1}[a-z]{2}\s*$/i.test(postcode)) return 'GB'
   else if(/^\s*\d{3}\s{1}\d{2}\s*$/i.test(postcode)) return 'SK'
   else return 'Not valid'
}
