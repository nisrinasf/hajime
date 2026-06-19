function anchorize(text){
return text.replace(/(ftp|https|ftp|ftps|file|smb|http)(:\/\/[a-z:\/]*\.?[a-z]{0,3})/gi, '<a href=\"$1$2\">$1$2<\/a>') 

/**
 * Replace()
 * validasi bagian yang akan di ubah saja tidak perlu satu string penuh divalidasi
 */
}

alternatif
const anchorize = t => t.replace(/(https?|ftps?|file|smb)\S+/gi, '<a href="$&">$&</a>');
// https? berarti bisa (http/https) karena s di akhir besifat opsional
// \S+ berarti menerima karakter apapun selain whitespace dan + berarti lebih dari 1 karakter
