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
     
        getLocation();
       
     
      

  }


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 

  }

  function showPosition(position) {
    lat= position.coords.latitude ;
    long= position.coords.longitude;
    var cap= document.getElementById("cap").value;
    if(cap!=null && cap!="" && cap!=" " && imageURI!="null"  && imageURI!="" && imageURI!=" " ){
    var kpliref = firebase.database().ref(`rescuepost`);
    var data={
        img:imageURI,
        description:cap,
        lat:lat,
        long:long,
        uidposted:sessionStorage.getItem("chatuid")
    }
    kpliref.push(data).then(function() {
        
window.alert("Your Response is recorded")
window.open('../index.html','_self');

});
    }
    else{
        window.alert("error happened")
    }


  }
  

