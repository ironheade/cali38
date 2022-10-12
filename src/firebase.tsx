// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB_fF8pUgmtXTcghmZt4PgPuu_CfaMGd1c",
  authDomain: "cali38.firebaseapp.com",
  projectId: "cali38",
  storageBucket: "cali38.appspot.com",
  messagingSenderId: "683409103806",
  appId: "1:683409103806:web:5590e041aa9eb8d466f7ef"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const storage = getStorage(app);

export default getFirestore();

export { storage, app };