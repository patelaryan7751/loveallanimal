document.querySelector('#mchn').onclick = function(){
	
                        
                firebase.auth().signOut();
    
    
            
        
}
firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(!user){
var pq=document.getElementById("loadar");
    pq.style.display="none";
       window.open('signup.html','_self');
   } 
    else{
        
    var emailVerified = user.emailVerified;
    if(emailVerified==true)
    {var pq=document.getElementById("loadar");
    pq.style.display="none";
        window.open('database.html','_self')
    }
    
    


        
    }
    
});
