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

  document.getElementById("NASA-Form").addEventListener('submit', (e) => 

  {
      e.preventDefault()
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzBeQ0Nq93hI_gAMVRkDOncaSIQ4P1GAumaKFdBEyuSgqi0IlmD0TnAmW6VUEh0lnxukA/exec'
          const form = document.forms['google-sheet']


    
          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("You have successfully submitted."))
              .catch(error => console.error('Error!', error.message))

                
              
              
          })
      let firstname = document.getElementById("firstname").value
      let lastname = document.getElementById("lastname").value
      let country = document.getElementById("country").value
      let email = document.getElementById("email").value
      let phone = document.getElementById("phone").value
      let message = document.getElementById("message").value

      let object = {
          FirstName: firstname,
          LastName: lastname,
          Country: country,
          Email: email,
          Phone: phone,
          Message: message 

          
      }
  
      firebase.firestore().collection('form-users').add(object).then(doc=>{
          console.log(doc.id)
      }).catch(e=>{
          console.log(e)
      })
  

      alert("You have successfully signed up for Mission-Mars")
 })

