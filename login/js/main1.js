
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
			 var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
       var confirmPassword = document.querySelector("#cpass").value;
    email=email.trim();
    if(password!=null && email!=null && confirmPassword !=null && password!="" && email!="" && confirmPassword !="" && password!=" " && email!=" " && confirmPassword !=" "){
    var pq=document.getElementById("loadar");
    pq.style.display="block";
    
    const auth=firebase.auth();
            //alert("Sign in successful")
    if (password != confirmPassword){
					var tyu=document.getElementById("demo1");
            var pq=document.getElementById("loadar");
    pq.style.display="none";
                        tyu.textContent="Both passwords do not match please try again!";
        
					return false
				}
				else if(password == confirmPassword){
					firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
                         var tyu=document.getElementById("demo1");
                        var pq=document.getElementById("loadar");
    pq.style.display="none";
                        tyu.textContent=errorMessage;
                            console.log(errorMessage);
                            console.log(errorCode);
});
					return true
				}
                        
            
            
}
}

firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
       console.log(user);
       if(user.emailVerified==false){
       user.sendEmailVerification().then(function() {
            
   var emailVerified = user.emailVerified;
var pq=document.getElementById("loadar");
    pq.style.display="none";
       
        window.open('verify-email.html','_self');
       }).catch(function(error) {
  // An error happened.
           var errorMessage = error.message;
            var tyu=document.getElementById("demo1");
           var pq=document.getElementById("loadar");
    pq.style.display="none";
                        tyu.textContent=errorMessage;
                       firebase.auth().signOut();
           
});
       }
                                         else{
                                         var cliref = firebase.database().ref('crimecredential/');
       cliref.orderByChild("email").equalTo(user.email).on("value", function(data){
          
           if(data.val()){
               var pq=document.getElementById("loadar");
    pq.style.display="none";
               window.open('dash.html','_self');
}
           else{
               var pq=document.getElementById("loadar");
    pq.style.display="none";
               window.open('database.html','_self');
           }
 

});
       }
   
   } 
    else{
    console.log("no");
    }
});