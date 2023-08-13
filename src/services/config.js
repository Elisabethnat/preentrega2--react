import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBNxLG2ujYUtVF7mHLGiWur-vTH10ckQ0w",
  authDomain: "reactproyecto-1b49e.firebaseapp.com",
  projectId: "reactproyecto-1b49e",
  storageBucket: "reactproyecto-1b49e.appspot.com",
  messagingSenderId: "494694746402",
  appId: "1:494694746402:web:63800649eb1ecec2e3bd7b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);