function doubleCheck(str){
    return str.toLowerCase().match(/./g).some((e,i, arr) => e == arr[i+1]  )
}

// alternatif
const doubleCheck = (str) => /(.)\1/i.test(str);
// \1 mengacu pada hasil group pertama. Jika sama maka true jika berbeda maka false
