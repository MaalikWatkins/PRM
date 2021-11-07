    const firebaseConfig = {
    apiKey: "AIzaSyB845TuNQUIEjj86MWFga-6cGbA5WT44Xk",
    authDomain: "mylms-735c3.firebaseapp.com",
    databaseURL: "https://mylms-735c3.firebaseio.com",
    projectId: "mylms-735c3",
    storageBucket: "mylms-735c3.appspot.com",
    messagingSenderId: "2736999870",
    appId: "1:2736999870:web:b99bd26bb04c1d2d5b7def"
  };
    firebase.initializeApp(firebaseConfig);
  
    const auth = firebase.auth()
  
  
    let signUpButton = document.getElementById('signup')
    signUpButton.addEventListener("click", (e) => {
      
      e.preventDefault()
      console.log("clicked")
      
  
      var email = document.getElementById("inputEmail")
      var password = document.getElementById("inputPassword")
      
      auth.createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        location.reload();
        // Signed in 
        var user = userCredential.user;
        console.log("user",user.email)
        alert("Signup Seccessfull")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode)
        console.log("error Message", errorMessage)
        alert("Signup Failed")
      });
    })
  
  
  
  
  
  
  
  
    let signInButton = document.getElementById('signin')
    signInButton.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("clicked")
  
      var email = document.getElementById("inputEmail")
      var password = document.getElementById("inputPassword")
  
      auth.signInWithEmailAndPassword(email.value, password.value) 
      .then((userCredential) => {
      
        var user = userCredential.user;
        console.log("user",user.email)
        window.location = "dash.html";
        alert('login')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // alert("error code", errorCode)
        alert( errorMessage)
        alert
      });
     })
  
  
  auth.onAuthStateChanged(function(user) {
    if (user) {
  
      var email = user.email
    
      var users = document.getElementById("user")
      var text = document.createTextNode(email);
  
      users.appendChild(text);
  
      console.log(users)
      //is signed in
    } else {
      //no user signed in
    }
  })