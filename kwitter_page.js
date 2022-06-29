//YOUR FIREBASE LINKS
var  firebaseConfig = {
      apiKey: "AIzaSyAfuX7Ic-Ff7TanjQJA5G9Ylx1tAm902l8",
      authDomain: "class-test-3fbc8.firebaseapp.com",
      databaseURL: "https://class-test-3fbc8-default-rtdb.firebaseio.com",
      projectId: "class-test-3fbc8",
      storageBucket: "class-test-3fbc8.appspot.com",
      messagingSenderId: "566409246257",
      appId: "1:566409246257:web:dce5ed977bc45f36e40710"
    };
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
