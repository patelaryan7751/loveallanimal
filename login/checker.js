var config = {
   apiKey: "AIzaSyDspxepE3NSNwvuEIx25J9kQOhNoOLAhYs",
    authDomain: "love-animal-ea00b.firebaseapp.com",
    projectId: "love-animal-ea00b",
    storageBucket: "love-animal-ea00b.appspot.com",
    databaseURL: "https://love-animal-ea00b-default-rtdb.asia-southeast1.firebasedatabase.app",
    messagingSenderId: "584183102923",
    appId: "1:584183102923:web:2d7b360b79fb912b1cca4e",
    measurementId: "G-7LV0JRL7EG"
 
  };
     firebase.initializeApp(config);
    console.log(firebase);
firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
       var user = firebase.auth().currentUser;
       console.log(user);
       if(user.emailVerified!=true)
           {
       user.sendEmailVerification().then(function() {
            
   var emailVerified = user.emailVerified;

        
        window.open('verify-email.html','_self');
           
    
}).catch(function(error) {
  // An error happened.
});
           }
           var cliref = firebase.database().ref('crimecredential/');
       cliref.orderByChild("email").equalTo(user.email).on("value", function(data){
          
           if(data.val()){
               window.open('../index.html','_self');
}
           else{
               window.open('database.html','_self');
           }

   } );
   }
    else{
    window.open('index1.html','_self');
    }
});