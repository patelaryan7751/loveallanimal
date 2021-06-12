var cliref = firebase.database().ref('rescuepost/');
cliref.orderByChild("uid").on("child_added", function(data){

var newVoke = data.val();
document.getElementById("loader").style.display="none"
var html = "";
html +=`<div class="card">
<div class="content">
    <div class="form">
        <div class="imgBx"><img src="${newVoke.img}" alt=""></div>
        <p>${newVoke.description}</p>
        <form>
            <div class="inputBx">
                <input type="button" onclick="window.open('https://maps.google.com/?q=${newVoke.lat},${newVoke.long}','_self');" value="View">
            </div>
           
        </form>
    </div>
</div>
</div>`
document.querySelector("#rescuepost").innerHTML+= html;


})