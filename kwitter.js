function login() {
    var usernamee = document.getElementById("user_name").value;
    localStorage.setItem("username", usernamee);
    window.location = "chatterbox_page2.html";
}