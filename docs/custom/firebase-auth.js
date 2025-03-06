
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAY0Vz4YcxIzFZnRAeA-XdG7rPU21Pxyrg",
    authDomain: "keystone-edutech.firebaseapp.com",
    projectId: "keystone-edutech",
    storageBucket: "keystone-edutech.firebasestorage.app",
    messagingSenderId: "48328181838",
    appId: "1:48328181838:web:69fb99fa34af150ddb9b1f",
    measurementId: "G-BXCNXCSBS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var open_paths=["/","/java/","/java/introduction/","/java/history-evolution/",
    "/java/features/","/java/jdk-jre-jvm/","/java/install-jdk/",
    "/java/install-ide/","/java/hellojava"];

var u = sessionStorage.getItem("USER");
var r = sessionStorage.getItem("REDIRECT");
var cp = window.location.pathname;
if(open_paths.indexOf(cp)>-1){
    console.log("Open paths");
    document.getElementById("content").style.display="block";
}else{
    window.location.href = "/login";
}
