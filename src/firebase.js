// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzXW_fNn2mrmB-cX7fiyHTZUwssvKSLy8",
  authDomain: "realtor-58ec3.firebaseapp.com",
  projectId: "realtor-58ec3",
  storageBucket: "realtor-58ec3.appspot.com",
  messagingSenderId: "608310489126",
  appId: "1:608310489126:web:83517ae81e653001faf6e7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore();