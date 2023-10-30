// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
 
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGZz389giM_1r2EnU6znrh5RyJL4jJqA8",
  authDomain: "assigment-patdel.firebaseapp.com",
  projectId: "assigment-patdel",
  storageBucket: "assigment-patdel.appspot.com",
  messagingSenderId: "435253348744",
  appId: "1:435253348744:web:47cf8f51b4dac39d01123d",
  measurementId: "G-LBJ8HCNJ2T",
};

// Initialize Firebasee
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
