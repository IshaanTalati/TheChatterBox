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

function AddRoom() {
      var roomkeeper = document.getElementById("room_name").value
      firebase.database().ref("/").child(roomkeeper).update({
            purpose: "adding room name"
      })
      localStorage.setItem("roomname", roomkeeper);
      window.location = "TheChatterBoxITSELF.html"
}



var username = localStorage.getItem("username")
document.getElementById("user_name").innerHTML = "Welcome " + username + "!"
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names)
                  var row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>"
                  document.getElementById("output").innerHTML += row

                  //End code
            });
      });
}

getData();

function redirectToRoomName(name) {
      localStorage.setItem("roomname", name)
      window.location = "TheChatterBoxITSELF.html"
}

function logout() {
      localStorage.removeItem("roomname")
      localStorage.removeItem("username")
      window.location = "index.html"
}





