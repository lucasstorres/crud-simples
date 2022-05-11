// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//importar os recursos do firestore
import {getfirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-3BdnlKfC3FZyuUKXO8qeRKlPw0k3MLU",
  authDomain: "crud-simples-3a9a8.firebaseapp.com",
  projectId: "crud-simples-3a9a8",
  storageBucket: "crud-simples-3a9a8.appspot.com",
  messagingSenderId: "898338546379",
  appId: "1:898338546379:web:d7dcb8dc7be884b916314e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getfirestore(app)