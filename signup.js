
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCNtb0ZqBoP9Bjkrh3B0_tPJ0js_z7z_Hw",
    authDomain: "spu-gym-database.firebaseapp.com",
    databaseURL: "https://spu-gym-database-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "spu-gym-database",
    storageBucket: "spu-gym-database.appspot.com",
    messagingSenderId: "206479521383",
    appId: "1:206479521383:web:9e12ff6763a81f27a206c2",
    measurementId: "G-7FJ0V7D3MD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value; 

  const sighUp = document.getElementById('sighUp');
  SubmitEvent.addEventListener("click",function (event){
    event.preventDefault()
    alert(5)
  })