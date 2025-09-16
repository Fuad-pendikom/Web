// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Config dari Firebase console (punyamu)
const firebaseConfig = {
  apiKey: "AIzaSyAtIbdSSvbPkqXBpQvLYQGnAp-RiQgmR7I",
  authDomain: "fuad-project-2f405.firebaseapp.com",
  projectId: "fuad-project-2f405",
  storageBucket: "fuad-project-2f405.appspot.com",
  messagingSenderId: "256341941620",
  appId: "1:256341941620:web:c7466c7190764044a3a021",
  measurementId: "G-55BPX1HK4B"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
