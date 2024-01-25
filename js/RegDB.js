import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.3/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

//config code...........
const firebaseConfig = {
            apiKey: "AIzaSyCiNLLV_8GXpvSD7IeVUfp4dbq-_pcvn7w",
            authDomain: "bookish-proj.firebaseapp.com",
            databaseURL: "https://bookish-proj-default-rtdb.firebaseio.com",
            projectId: "bookish-proj",
            storageBucket: "bookish-proj.appspot.com",
            messagingSenderId: "351432216616",
            appId: "1:351432216616:web:59c46450f373a82ad9251d",
            measurementId: "G-DH4RJ9TML1"
        };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
// console.log(app);
console.log(db);



async function register(event) {
  const email = document.getElementById("Email_TextBox").value;
  const password = document.getElementById("Password_TextBox").value;
  const username = document.getElementById("Username_TextBox").value;
  event.preventDefault();



  console.log(email, password, username);

  try {
    const authData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await set(ref(db, `users/${authData.user.uid}`), {
      username,
      email,
      password,
    });



    alert("Registration Successful!");
    window.location.href = "/html/Login.html";
  } catch (error) {
    console.error("Error during registration:", error.message);
    alert(error.code);
  }

}



document
  .getElementById("Register_Button")
  .addEventListener("click", function (event) {
    register(event);
  });

  