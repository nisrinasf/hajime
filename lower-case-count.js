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

  // alternatif 
  return (str.match(/[a-z]/g) || []).length
  /**
  Fungsi match mengembalikan null jika tidak ada kecocokan. 
  Jadi, jika Anda menghapus koma || []dan melakukan lowercaseCount("QWE"), 
  Anda akan mendapatkan kesalahan yang menyatakan tidak dapat membaca panjang null karena QWE tidak cocok dengan regex 
  (semuanya huruf besar, dan regex cocok dengan huruf kecil).

  Penambahan ini || []membuat array kosong akan dibuat jika fungsi pencocokan bernilai null,
  dan karena array kosong memiliki properti panjang, Anda tidak akan mendapatkan kesalahan apa pun.
  **/
}
