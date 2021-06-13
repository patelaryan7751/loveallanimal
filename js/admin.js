document.querySelector('#mchn').onclick = function(){
    firebase.auth().signOut();          

}


firebase.auth().onAuthStateChanged(function(user) {


if(user){
console.log(user.email)

var cliref = firebase.database().ref('crimecredential/');
cliref.orderByChild("email").equalTo(user.email).on("child_added", function(data){

var newVoke = data.val();
console.log(newVoke.admin)
sessionStorage.setItem("chatuid",newVoke.uid)
sessionStorage.setItem("chatname",newVoke.name)
sessionStorage.setItem("chatemail",newVoke.email)
if(newVoke.admin=="false"){
window.open('index.html','_self');
}

var first= newVoke.name.split(" ");
console.log(first.length)
lindex=first.length
document.querySelector("#avtimg").innerHTML=`<img src="https://ui-avatars.com/api/?name=${first[0]}+${first[lindex-1]}&rounded=true"   alt="" width="30" height="24" class="d-inline-block align-text-top">`


})




}

else{
window.open('https://patelaryan7751.github.io/loveallanimal/login/index.html','_self');
}





});
