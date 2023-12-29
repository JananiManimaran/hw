function formsumitted(event){
    console.log(event)
    let form = document.getElementById('loginform')
  
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
  
  form.classList.add('was-validated')
  }
  
   function formreset(event){
      event.preventDefault()
   }