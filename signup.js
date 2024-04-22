
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
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
  const auth = getAuth();

  const email = document.getElementById('Email').value; 
  const password = document.getElementById('Password').value; 

        // Sign Up
        const submit = document.querySelector('submit');
        submit.addEventListener('click', e => {
            e.preventDefault();
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            auth.createUserWithEmailAndPassword(email, password)
                .then(cred => {
                    console.log('User signed up!');
                })
                .catch(error => {
                    console.error('Error signing up:', error.message);
                });
        });
