// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoJlRDO6mQGkUwpR9pvf9IGGjWFvhHjWc",
  authDomain: "netflix-clone-5eba5.firebaseapp.com",
  projectId: "netflix-clone-5eba5",
  storageBucket: "netflix-clone-5eba5.appspot.com",
  messagingSenderId: "335050977140",
  appId: "1:335050977140:web:fe3f1ac1c9abd901d50621",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
