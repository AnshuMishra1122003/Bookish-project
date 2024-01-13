//Google Authentication


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCqQ_DT-HXLU3cXRAfhF8gQAIUqXGF2QP4",
    authDomain: "ty-bookish.firebaseapp.com",
    projectId: "ty-bookish",
    storageBucket: "ty-bookish.appspot.com",
    messagingSenderId: "703454326025",
    appId: "1:703454326025:web:32495458c13821922bf7d8"
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