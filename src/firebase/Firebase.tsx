// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey:"AIzaSyCEBRqlrtyYO8TnigCIH5uoXTZVQrjwLnc",
  authDomain: "bookcatalog-c912a.firebaseapp.com",
  projectId: "bookcatalog-c912a",
  storageBucket: "bookcatalog-c912a.appspot.com",
  messagingSenderId: "540463264421",
  appId: "1:540463264421:web:d424e8120aa2e3617c934c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;