function doubleCheck(str){
    return str.toLowerCase().match(/./g).some((e,i, arr) => e == arr[i+1]  )
}
