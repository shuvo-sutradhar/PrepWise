// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArlk30wvLkXrIiA2mKJrsDv3pQMLDKq9w",
  authDomain: "prepwise-be15a.firebaseapp.com",
  projectId: "prepwise-be15a",
  storageBucket: "prepwise-be15a.firebasestorage.app",
  messagingSenderId: "245878582758",
  appId: "1:245878582758:web:c731d85584b2e33422fa27",
  measurementId: "G-1XF7K5TQXE"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);