import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

//config code...........
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
const db = getDatabase(app);
// console.log(app);
console.log(db);

// const Register_Button = document.getElementById("Register_Button");
async function register(event) {
  const email = document.getElementById("Email_TextBox").value;
  const password = document.getElementById("Password_TextBox").value;
  const username = document.getElementById("Username_TextBox").value;
  event.preventDefault();
  // const email = e;

  // const password = p.value;

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

    // wrapper.classList.toggle("active");
    alert("Registration Successful!");
    window.location.href = "/html/Login.html";
  } catch (error) {
    console.error("Error during registration:", error.message);
    alert(error.code);
  }

  //
  //   await createUserWithEmailAndPassword(auth, email, password)
  //     .then(() => {
  //       const ref = doc(db, "Users", email);
  //       const user = {
  //         Username: uername,
  //         Email: email,
  //       };
  //       console.log(user);
  //       setDoc(ref, user);

  //       alert("REGISTRATION SUCCESSFUL");

  //       window.location.href = "/index.html";
  //     })
  //     .catch((error) => {
  //       console.log({ message: error.message, error: error.code });
  //     });
}

document
  .getElementById("Register_Button")
  .addEventListener("click", function (event) {
    register(event);
  });
// Register_Button.addEventListener("click", function (event) {
//   register(event);
// });
