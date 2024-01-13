import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiNLLV_8GXpvSD7IeVUfp4dbq-_pcvn7w",
  authDomain: "bookish-proj.firebaseapp.com",
  projectId: "bookish-proj",
  storageBucket: "bookish-proj.appspot.com",
  messagingSenderId: "351432216616",
  appId: "1:351432216616:web:59c46450f373a82ad9251d",
  measurementId: "G-DH4RJ9TML1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function forget_password(e) {
  const email = document.getElementById("email").value;
  e.preventDefault();

  sendPasswordResetEmail(auth, email)
    .then((data) => {
      console.log(data);
      alert("Check your email to reset the password!");
      window.location.href = "/html/Login.html";
    })
    .catch((err) => {
      alert("Something went wrong: " + err.code);
    });
}

document
  .getElementById("forget-pass-btn")
  .addEventListener("click", function (event) {
    forget_password(event);
  });
