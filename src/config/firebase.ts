// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPy7MXlbZP20eA_D_J0IT1iB1n0x50xl0",
  authDomain: "learn-react-34b2b.firebaseapp.com",
  projectId: "learn-react-34b2b",
  storageBucket: "learn-react-34b2b.appspot.com",
  messagingSenderId: "715888312058",
  appId: "1:715888312058:web:ef03d08e845d1583509343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);