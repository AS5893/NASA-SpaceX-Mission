 
 
// -------------THIS INITIALISES YOUR DATABASE ---------------// 
 
 
var firebaseConfig = {
    apiKey: "AIzaSyDR_RploDZeZuA-PiYexWRLAqgTiiW99J0",
    authDomain: "nasa-spacesx.firebaseapp.com",
    databaseURL: "https://nasa-spacesx-default-rtdb.firebaseio.com",
    projectId: "nasa-spacesx",
    storageBucket: "nasa-spacesx.appspot.com",
    messagingSenderId: "590280165609",
    appId: "1:590280165609:web:b8ba7da79c0aa22a8dc878",
    measurementId: "G-R48HWEGQT2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 
var database = firebase.database();
var ref = database.ref('users');
 
 
var object = document.getElementById("sign-in-btn");
object.onclick = function() {
 
    function receivedData(data){
        var values = data.val();
        var keys = Object.keys(values);
 
        var enteredUsername = document.getElementById("enteredUsername").value;
        var enteredPassword = document.getElementById("enteredPassword").value;
 
 
        for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            var username = values[k].username;
            var password = values[k].password;
 
 
            if (enteredUsername == username && enteredPassword == password){
              alert("You Have Successfully Signed In")
              window.location.href = "homepage.html";
              break
            
            }
 
 
            else{
                alert("Please Check Your UserName and Password or SIGN-UP")
                break
                 //you dont want to go to the next window if it wrong password
 
            }
 
 
 
 
        }   
 
    }
 
    function errData(data){
        console.log(data)
    }
    
 
    ref.on('value', receivedData, errData) 
 
}


var object = document.getElementById("sign-btn");   
object.onclick = function () {
    
 
    var data = {
        name: document.getElementById("Your-Name").value,
        username: document.getElementById("UserName").value,
        password: document.getElementById("Password").value,
        phone_number: document.getElementById("Phone-Number").value,
        email_id: document.getElementById("Email-Id").value,
    };
 
     
    ref.push(data);

    alert("You have successfully signed up")
    window.location.reload()
    
    
 
};
