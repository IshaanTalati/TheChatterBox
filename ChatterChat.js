var firebaseConfig = {
      apiKey: "AIzaSyDYEBUZ_Hgp8HhJip-3BGIPab_eQNbTjqY",
      authDomain: "thechatterbox-2828.firebaseapp.com",
      databaseURL: "https://thechatterbox-2828-default-rtdb.firebaseio.com",
      projectId: "thechatterbox-2828",
      storageBucket: "thechatterbox-2828.appspot.com",
      messagingSenderId: "766844027658",
      appId: "1:766844027658:web:a958ce3be751dc1c8af0f3"
};
firebase.initializeApp(firebaseConfig);
var room_name = localStorage.getItem("roomname")
var usaname = localStorage.getItem("username")
function send() {
      var messagesdata = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name: usaname,
            msg: messagesdata,
            like: 0

      })
      document.getElementById("msg").value = ""

}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id)
                        console.log(message_data) 
                        var name =  message_data["name"];
                        var message=message_data["msg"]
                        var like = message_data["like"]
                        name_with_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class ='message_h4'>" + message + "</h4>";
                        like_button ="<button class='btn btn-warning' id="+firebase_message_id + " value="+like+" onclick='updateLike(this.id)'>" 
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
                        row=name_with_tag + message_with_tag + like_button + span_with_tag
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log (updated_likes)

firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
})
}
function logout() {
      localStorage.removeItem("roomname")
      localStorage.removeItem("username")
      window.location = "index.html"
}