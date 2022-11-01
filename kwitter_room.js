var firebaseConfig = {
apiKey: "AIzaSyCCHEIETIsD4W8OnzdgXUnzTmA4XLbcszo",
  authDomain: "let-chat-47179.firebaseapp.com",
  databaseURL: "https://let-chat-47179-default-rtdb.firebaseio.com",
  projectId: "let-chat-47179",
  storageBucket: "let-chat-47179.appspot.com",
  messagingSenderId: "808812435326",
  appId: "1:808812435326:web:06591a662c7380e6e5c52f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code   
    console.log("Room Name - " + Room_names);
    row = "<div classs="+Room_names+" onclick='redirecttoRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
function addRoom()
{
   room_name = document.getElementById("room_name").value;
   firebase.databas().ref("/").child(room_name).update({

   });

  
   localStorage.setItem("room_name"), (room_name);

   window.location = "kwitter_page.html";


}
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}