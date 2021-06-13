var pcount=0;
var cliref = firebase.database().ref('communitypost/');
cliref.orderByChild("uid").on("child_added", function(data){

var newVoke = data.val();
pcount=pcount+1;
var first= newVoke.name.split(" ");
           console.log(first.length)
           lindex=first.length
           var prolink=`https://ui-avatars.com/api/?name=${first[0]}+${first[lindex-1]}&rounded=true`
document.getElementById("loader").style.display="none"
var html = "";
html +=`<div class="card">
<div class="content">
    <div class="form">
        <div class="avatar">
            <img src="${prolink}" alt="">
            <div class="user">
                <h3>${newVoke.name}</h3>
            </div>
        </div>
        <hr>
        <div class="imgBx"><img src="${newVoke.img}" alt=""></div>
        <p>${newVoke.description}</p>
        <hr>
        <div class="heart">
            <i onclick="toggle(this);" class="far fa-heart" data-id="${pcount}btn" id="${pcount}btn"></i>
        </div>
    </div>
</div>
</div>`
document.querySelector("#rescuepost").innerHTML+= html;


})


function toggle(self){
    var likeid = self.getAttribute("data-id");
    var btn = document.getElementById(`${likeid}`);

    if(btn.classList.contains("far")){
    btn.classList.remove("far");
    btn.classList.add("fas");
    }
}