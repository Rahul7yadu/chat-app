
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxjfFIC3qaIW7OXzompfASbNQ3s1e2Z4A",
  authDomain: "chat-app-54483.firebaseapp.com",
  projectId: "chat-app-54483",
  storageBucket: "chat-app-54483.appspot.com",
  messagingSenderId: "325093436375",
  appId: "1:325093436375:web:8358fdade89384f0a13992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}