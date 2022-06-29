  var  firebaseConfig = {
    apiKey: "AIzaSyAfuX7Ic-Ff7TanjQJA5G9Ylx1tAm902l8",
    authDomain: "class-test-3fbc8.firebaseapp.com",
    databaseURL: "https://class-test-3fbc8-default-rtdb.firebaseio.com",
    projectId: "class-test-3fbc8",
    storageBucket: "class-test-3fbc8.appspot.com",
    messagingSenderId: "566409246257",
    appId: "1:566409246257:web:dce5ed977bc45f36e40710"
  };
  
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
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

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
