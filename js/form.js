  const scriptURL = 'https://script.google.com/macros/s/AKfycbyNqT1WfLgEeMcodkAL4ClPGFCvYkY3Z6kgozitDzMBh5sT-yQ/exec'  
  const form = document.forms['test-form-1']  
  form.addEventListener('submit', e => {  
   e.preventDefault()  
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})  
    .then(response => console.log('Success!', response))  
    .catch(error => console.error('Error!', error.message))  
    $('#postForm').prepend($('<span></span>'));
    $('.msg-1,.msg-2').html("Thank you for subscribing");
    document.getElementById("test-form-1").reset();
    $('.msg-1,.msg-2').show().delay(500).fadeOut(2500);
  })     
  
  
