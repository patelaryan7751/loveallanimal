
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(e){
        e.preventDefault();
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

document.querySelector('#btn-signup').onclick = function(){

			 var name = document.querySelector('#name').value;
     name=name.trim();
    var phone = document.querySelector('#phnno').value;
    phone=phone.trim();
       var city = document.querySelector("#city").value;
    city=city.trim();
     var pin = document.querySelector("#pin").value;
    pin=pin.trim();
    if(name!=null && phone!=null && city!=null && pin!=null && name!="" && phone!="" && city!="" && pin!="" && name!=" " && phone!=" " && city!=" " && pin!=" "){
        var pq=document.getElementById("loadar");
    pq.style.display="block";
    var kpliref = firebase.database().ref(`crimecredential/${sessionStorage.getItem("kemkey")}`);
    var data={
        phone: phone,
        city: city,
        name: name,
        pin:pin,
        sr1:"0",
        sr2:"0",
        sr3:"0",
        sr4:"0",
        email:sessionStorage.getItem("vmkey"),
        uid:sessionStorage.getItem("kemkey"),
        admin:"false"
        
 }
     kpliref.set(data).then(function() {
            firebase.auth().signOut();

sessionStorage.clear();
         
         
        var pq=document.getElementById("loadar");
    pq.style.display="none";
 window.open('index.html','_self');
    
});
 

     
					return true
				}
                        
            
            
}


firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
     var user = firebase.auth().currentUser;
       console.log(user.email);
       sessionStorage.setItem("vmkey",user.email);
       sessionStorage.setItem("kemkey",user.uid)
      
   } 
    else{
        var pq=document.getElementById("loadar");
    pq.style.display="none";
    window.open('index.html','_self');
    }
});