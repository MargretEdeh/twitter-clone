// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDXXc4a5jKssmiGhhPJ4la7gSH0qAGHHo",
  authDomain: "twitterclone-ad46b.firebaseapp.com",
  projectId: "twitterclone-ad46b",
  storageBucket: "twitterclone-ad46b.appspot.com",
  messagingSenderId: "584862415926",
  appId: "1:584862415926:web:c673a9ae96aa36c1c4ec97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app);

export const database = getFirestore(app)