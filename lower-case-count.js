function lowercaseCount(str){
  /**
  Algoritma 
  1. Saring masukan antara huruf dan angka
  2. Setelah ditemukan masukan berupa huruf, saring huruf kecil saja
  3. bentuk keluaran menjadi array
  4. hitung index dalam array
  **/
  let res = str.match(/[a-z]/g)
  return  res == null ? 0 : res.length
}
