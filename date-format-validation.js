   
function dateChecker(date){
  return /^\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}$/g.test(date)
}

// alternatif

function dateChecker(date){
	return /^(\d\d-){2}\d{4} \d\d:\d\d$/.test(date);
}
   
    console.log(dateChecker("01-09-2016 01:20")); 
    console.log(dateChecker("14-10-1066 12:00"));
    console.log(dateChecker("19-12-2050 13:34"));
    console.log(dateChecker("01-09-2016 00:00"));
    //false
    console.log(dateChecker("01-09-2016 01;20"));
    console.log(dateChecker("Tenth of January"));
    console.log(dateChecker("20 Sep 1988"));
    console.log(dateChecker("21-12-2013 02:224"));
    console.log(dateChecker("Tue Sep 06 2016 01:46:38 GMT+0100"));
    console.log(dateChecker("01-09-2016 2:00"));
    console.log(dateChecker("001-02-2016 00:00"));
    console.log(dateChecker("01_09_2016 01:20"));