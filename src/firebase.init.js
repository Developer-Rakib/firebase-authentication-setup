// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3RvaWo7f8lR87Iuc-z0A1nm1R3RcYmKY",
    authDomain: "fir-authentication-4a2b9.firebaseapp.com",
    projectId: "fir-authentication-4a2b9",
    storageBucket: "fir-authentication-4a2b9.appspot.com",
    messagingSenderId: "409907477551",
    appId: "1:409907477551:web:50428e89e7eb1811cedada"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;