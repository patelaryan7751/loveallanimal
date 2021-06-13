function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result);
        imageURI = reader.result;
        
    }
    reader.readAsDataURL(file);
  }

  function upload(){
     
        getpost();
       
     
      

  }


  function getpost() {
    var cap= document.getElementById("cap").value;
    if(cap!=null && cap!="" && cap!=" " && imageURI!="null"  && imageURI!="" && imageURI!=" " ){
    var kpliref = firebase.database().ref(`communitypost`);
    var data={
        img:imageURI,
        description:cap,
        uidposted:sessionStorage.getItem("chatuid"),
        name:sessionStorage.getItem("chatname")
    }
    kpliref.push(data).then(function() {
        
window.alert("Your Response is recorded")
window.open('index.html','_self');

});
    }
    else{
        window.alert("error happened")
    }


  }
  

