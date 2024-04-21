// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD__T6tan4gCQ2Z4i9xML4A642rovqEkiA",
  authDomain: "chirpy-139bb.firebaseapp.com",
  databaseURL: "https://chirpy-139bb-default-rtdb.firebaseio.com",
  projectId: "chirpy-139bb",
  storageBucket: "chirpy-139bb.appspot.com",
  messagingSenderId: "1056885564006",
  appId: "1:1056885564006:web:0aedbe69b0373908c6c3a7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =
  "Welcome Back " + user_name + "!";

function addRoom() {
  console.log("adding room");
  room_name = document.getElementById("room_name").value;
  console.log(room_name);
  firebase.database().ref("/").child(room_name).update
  ({
    purpose : "adding room"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}


function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}