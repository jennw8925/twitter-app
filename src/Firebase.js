// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3hAhWwT054fZ1oPyV9LoRGxi1kj7uybI",
  authDomain: "twitter-5a342.firebaseapp.com",
  projectId: "twitter-5a342",
  storageBucket: "twitter-5a342.appspot.com",
  messagingSenderId: "648997758195",
  appId: "1:648997758195:web:fda862904199b6cae70386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) 
export{db} 