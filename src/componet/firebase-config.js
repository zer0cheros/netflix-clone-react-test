// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkpXH5adUD1YlhfdEaZLvuuywo_6AVVVs",
  authDomain: "aaaaaa-74019.firebaseapp.com",
  projectId: "aaaaaa-74019",
  storageBucket: "aaaaaa-74019.appspot.com",
  messagingSenderId: "1011860765059",
  appId: "1:1011860765059:web:55b9fc6c8ba64ade391eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()

