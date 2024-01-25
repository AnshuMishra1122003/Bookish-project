//Google Authentication


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
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

const user = auth.currentUser;

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;


    console.log(userEmail);

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;

}

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    }
    else {
        alert("Create Account & Login");

    }
})