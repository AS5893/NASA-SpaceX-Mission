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
  var ref = database.ref('userData');
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
                window.open('display-data.html', '_blank');
                window.location.href = "homepage.html"
                break;
              }
   
              else{
                  alert("Incorrect Username or Password")
                  window.location.reload();
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
  