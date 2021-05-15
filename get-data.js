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


firebase.firestore().collection('form-users').onSnapshot(docs => {
    document.getElementById('result').innerHTML += ``
    docs.forEach(doc => {
         
         
         document.getElementById('result').innerHTML += `
    <table style="width:100%; text-align:center; style="border: 1px solid black">  <tr style="border: 1px solid orange"> 
            <th style="border: 1px solid black">FIRSTNAME</th>    
             <th style="border: 1px solid black">LASTNAME</th>    
             <th style="border: 1px solid black">COUNTRY</th>    
             <th style="border: 1px solid black">EMAIL-ID</th>   
             <th style="border: 1px solid black">PHONE-NUMBER</th>    
             <th style="border: 1px solid black">MESSAGE</th>
             </tr>     
             
             <tr style="border: 1px solid orange">
             <td style="border: 1px solid black">${doc.data().FirstName}</td>
             <td style="border: 1px solid black">${doc.data().LastName}</td>
             <td style="border: 1px solid black">${doc.data().Country}</td>
             <td style="border: 1px solid black">${doc.data().Email}</td>
             <td style="border: 1px solid black">${doc.data().Phone}</td>
             <td style="border: 1px solid black">${doc.data().Message}</td>
             </tr>
        </table>

        <br>
        <br>
        <br>
         
         
         `
     });
 })