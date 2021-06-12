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
     var d0 = document.querySelector('#d0');
     var d1 = document.querySelector('#d1');
     var d2 = document.querySelector('#d2');
     var d3 = document.querySelector('#d3');
     var d4 = document.querySelector('#d4');
     var d5 = document.querySelector('#d5');
     var d6 = document.querySelector('#d6');
     var d7 = document.querySelector('#d7');
    var phone=sessionStorage.getItem("phones")
    var city=sessionStorage.getItem("citys")
   
    if(d0.checked==true||d1.checked==true||d2.checked==true||d3.checked==true||d4.checked==true||d5.checked==true||d6.checked==true||d7.checked==true){
        var pq=document.getElementById("loadar");
    pq.style.display="block";
        var domain="";
        if(d0.checked==true){
        domain=`${domain} ${d0.value} `
        }
        if(d1.checked==true){
        domain=`${domain} ${d1.value} `
        }
                if(d2.checked==true){
        domain=`${domain} ${d2.value} `
        }
                if(d3.checked==true){
        domain=`${domain} ${d3.value} `
        }
                if(d4.checked==true){
        domain=`${domain} ${d4.value} `
        }
                if(d5.checked==true){
        domain=`${domain} ${d5.value} `
        }
                if(d6.checked==true){
        domain=`${domain} ${d6.value} `
        }
                if(d7.checked==true){
        domain=`${domain} ${d7.value} `
        }
        
    var kpliref = firebase.database().ref(`crimecredential/${phone}${city}/`);
    var data={
        d0:d0.checked,
        d1:d1.checked,
        d2:d2.checked,
        d3:d3.checked,
        d4:d4.checked,
        d5:d5.checked,
        d6:d6.checked,
        d7:d7.checked,
        domain:domain
 }
     kpliref.update(data).then(function() {
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
      
   } 
    else{
        var pq=document.getElementById("loadar");
    pq.style.display="none";
    window.open('signup.html','_self');
    }
});