// Import Firebase modules from gstatic
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase Configuration
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
const auth = getAuth(app);
const db = getFirestore(app);

// Google Login Function
async function googleLogin() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check Payment Status
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists() && userSnap.data().hasPaid) {
      window.location.href = ""; // Redirect to course dashboard
    } else {
      window.location.href = "register"; // Redirect to payment page
    }
  } catch (error) {
    console.error("Login error:", error);
  }
}

// Logout Function
function logout() {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
}

// Export functions globally
window.googleLogin = googleLogin;
window.logout = logout;
