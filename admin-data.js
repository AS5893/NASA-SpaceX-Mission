var firebaseConfig = {
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 
var database = firebase.database();
var ref = database.ref('users');
var object = document.getElementById("sign-in-btn-admin");
var login = document.getElementById("cont")
 
 
object.onclick = function() {
 
    function receivedData(data){
 
        var objPeople = [{ username: "admin", password: "admin@nasa"}]
        var enteredUsername = document.getElementById("enteredUsername").value;
        var enteredPassword = document.getElementById("enteredPassword").value;
 
 
        for (var i = 0; i < objPeople.length; i++){
            if(enteredUsername == objPeople[i].username && enteredPassword == objPeople[i].password){
                alert("You Have Successfully Signed In")
              window.location.href = "admin-data.html";
              break;
            }
 
            else{
                alert("Incorrect Username or Password")
                break;
            }
 
        }
    }
 
   function errData(data){
        console.log(data)
    }
    
 
    ref.on('value', receivedData, errData)

  login.style.display = "none"
}

    





