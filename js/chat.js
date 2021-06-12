var email,uid,uname;

firebase.auth().onAuthStateChanged(function(user) { 
 
    if(user){
  console.log(user.email)
  email=user.email;
  uid=user.uid;
  var cliref = firebase.database().ref('crimecredential/');
    cliref.orderByChild("email").equalTo(user.email).on("child_added", function(data){
        uname=data.val().name;
    });        
 }
     
     else{
       window.open('login/index.html','_self');
     } 
    });

    function sendMessage() {
            // get message
            var date=new Date();
            var time=date.getHours()+" : "+date.getMinutes();
            var message = document.getElementById("message").value;
     
            // save in database
            firebase.database().ref("chats/"+uid).push().set({
                "sender": uname,
                "message": message,
                "time": time
            });
            document.getElementById("message").value="";
            var element = document.getElementById("messages");
            element.scrollTop = element.scrollHeight - element.clientHeight;
            // prevent form from submitting
            return false;
        }
    // listen for incoming messages
        firebase.database().ref("chats/").on("child_added", function (snapshot) {
            console.log("heyyy");
            var html = "";
            // give each message a unique ID
            if (snapshot.val().sender != uname)
            html += "<div id='message-" + snapshot.key + "'>";
            // show delete button if message is sent by me
            if (snapshot.val().sender == uname) {
                html += "<div style='align-self:flex-end;background-color:#019850;color:#fff;margin-right:8px;' id='message-" + snapshot.key + "'>";
                html += "<i style='cursor:pointer;margin-right:10px;float:right;' class='fa fa-trash' data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>";
                    
                html += "</i>";
            }
            html += "<span>"+snapshot.val().sender + " :</span> <br>" + snapshot.val().message;
            html += "</div>";
            if (snapshot.val().sender == uname)
            {html +="<p style='align-self:flex-end;margin-right:8px;'>"+snapshot.val().time + "</p>";}
            else
            {html +="<p style='margin-left:5px;'>"+snapshot.val().time + "</p>";}
            document.getElementById("messages").innerHTML += html;
            var element = document.getElementById("messages");
            element.scrollTop = element.scrollHeight - element.clientHeight;
        });
    function deleteMessage(self) {
        // get message ID
        var messageId = self.getAttribute("data-id");
     
        // delete message
        firebase.database().ref("chats/"+uid).child(messageId).remove();
    }
    // attach listener for delete message
    firebase.database().ref("messages/"+uid).on("child_removed", function (snapshot) {
        // remove message node
        document.getElementById("message-" + snapshot.key).innerHTML = "This message has been removed";
    });