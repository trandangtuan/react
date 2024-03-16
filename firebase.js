import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDyJ8UZ4gsNTU8jEQxXDHhb7b6FZhAOsnA",
  authDomain: "web-app-21e1b.firebaseapp.com",
  databaseURL: "https://web-app-21e1b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web-app-21e1b",
  storageBucket: "web-app-21e1b.appspot.com",
  messagingSenderId: "815633337707",
  appId: "1:815633337707:web:986fcd2c84662f71cc902e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
