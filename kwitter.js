user_name = "";

function adduser()
{
   user_name = document.getElementById("usernamebox").value;
   localStorage.setItem("user_name", user_name);
   window.location = "kwitter_room.html";
}