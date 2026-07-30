let passmain = document.getElementById('pass1')
    passduplicate = document.getElementById('pass2')

  let errors = []
  let success;
  let li = document.createElement("li");
  
passmain.addEventListener('change', function(event){
  let password = event.target.value

  if(!/^[A-Z]/.test(password)){
      if(errors.filter(err => err.id == 1)){
        errors = errors.filter(value => value.id !== 1)
      }
      errors.push({id : 1, message : 'Huruf pertama harus huruf besar'})
    
  }else{
    errors = errors.filter(value => value.id !== 1)
  }
  if(/[^\da-zA-Z]/.test(password)){
      if(errors.filter(err => err.id == 2)){
        errors = errors.filter(value => value.id !== 2)
      }
      errors.push({id : 2, message : 'Hanya boleh memuat angka dan huruf'}) 
  }else{
    errors = errors.filter(value => value.id !== 2)
  }

  if(!/^.{8,12}$/.test(password)){
      if(errors.filter(err => err.id == 3)){
        errors = errors.filter(value => value.id !== 3)
      }
      errors.push({id : 3, message : 'Minimal 8 karakter, Maximal 12 karakter'})
  }else{
    errors = errors.filter(value => value.id !== 3)
  }

   
    if(errors.filter(e => e.id == 1).length > 0){
      if(document.querySelectorAll('li[id=error1]').length < 1){
      let error = errors.find(error => error.id == 1)
      let li = document.createElement("li");
      let attr = document.createAttribute('id')
      attr.value = 'error1';
      li.setAttributeNode(attr)
      li.innerText = error.message
      passduplicate.appendChild(li)
      }
  }else{
   const element = document.getElementById('error1')
   if(element){
    element.remove()
   }
  }

    if(errors.filter(e => e.id == 2).length > 0){
      if(document.querySelectorAll('li[id=error2]').length < 1){
      let error = errors.find(error => error.id == 2)
      let li = document.createElement("li");
      let attr = document.createAttribute('id')
      attr.value = 'error2';
      li.setAttributeNode(attr)
      li.innerText = error.message
      passduplicate.appendChild(li)
      }
  }else{
    const element = document.getElementById('error2')
      if(element){
    element.remove()
   }
  }

    if(errors.filter(e => e.id == 3).length > 0){
      if(document.querySelectorAll('li[id=error3]').length < 1){
      let error = errors.find(error => error.id == 3)
      let li = document.createElement("li");
      let attr = document.createAttribute('id')
      attr.value = 'error3';
      li.setAttributeNode(attr)
      li.innerText = error.message
      passduplicate.appendChild(li)
      }
  }else{
    const element = document.getElementById('error3')
      if(element){
    element.remove()
   }
  }

  if(errors.length == 0){
          let li = document.createElement("li");
      let attr = document.createAttribute('id')
      attr.value = 'success';
      li.setAttributeNode(attr)
      li.innerText = "Password Telah Sesuai"
      passduplicate.appendChild(li)
  }else{
    const element = document.getElementById('success')
      if(element){
    element.remove()
   }
  }

})

  // if(errors.includes(...errors, {id : 1})){
  //     let error = errors.find(error => error.id == 1)
  //     let li = document.createElement("li");
  //     let attr = document.createAttribute('id')
  //     attr.value = 'error1';
  //     li.setAttributeNode(attr)
  //     li.innerText = error.message
  //     passduplicate.appendChild(li)
  // }else{
  //   const element = document.getElementById('error1')
  //   element.remove()
  // }





/**
 * Pertaturan
 * Hanya memuat huruf dan Angka
 * Huruf pertama harus huruf besar
 * Minimal 8 karakter
 * Maximal 12 karakter
 * Tidak boleh ada spasi
 * Huruf kedua selanjutnya harus huruf kecil semua
 */