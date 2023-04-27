// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgIvP6qu2HjrQ4rTARVkBivvB6OqsVUZg",
  authDomain: "slearn-oraichain.firebaseapp.com",
  projectId: "slearn-oraichain",
  storageBucket: "slearn-oraichain.appspot.com",
  messagingSenderId: "354493118274",
  appId: "1:354493118274:web:a51a3af0217eaa67afbadb",
  measurementId: "G-38EHWDPZB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Database = getDatabase(app);

export default Database;