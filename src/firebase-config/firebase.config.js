// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCljOiww6hoUfQrg-CN6cJQ5gbkkozjK48",
  authDomain: "assignment-11-7ddcc.firebaseapp.com",
  projectId: "assignment-11-7ddcc",
  storageBucket: "assignment-11-7ddcc.appspot.com",
  messagingSenderId: "468670169178",
  appId: "1:468670169178:web:cc9ce663b7cc847745d863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

