$(function (){

  // JQURAY CODE

  let togglerBtn = $('button');

  togglerBtn.click( function (){
     let type = $("input").attr('type')
    
     if(type == 'password'){

      $("input").attr("type",'text')
      $(this).html('<i class="bi bi-eye-slash"></i>')
     }
     else{
     $("input").attr("type","password")
     $(this).html('<i class="bi bi-eye"></i>')
     

    }
  })
    

})