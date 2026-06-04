function digit(val){
  return val.length == 1 && /\d/.test(val);
}

// alternatif
return /^\d$/.test(this);
/** 
/* tand (^) untuk awal baris dan ($) untuk akhir baris
/* jadi jika diapit oleh keduanya otomatis masukan yang tervalidasi hanya 1 digit 
**/
