
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Sf43vAhr9zuNkr6yWiT30I0FN6cz9YM",
  authDomain: "blog-64306.firebaseapp.com",
  projectId: "blog-64306",
  storageBucket: "blog-64306.appspot.com",
  messagingSenderId: "1099441387037",
  appId: "1:1099441387037:web:3395f475c0174237d1f8f4",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
