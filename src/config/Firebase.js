// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore/lite';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAjdCrG_ExwfpKAzUD5-t3eRj-E0z4V1sM",
  authDomain: "hackathon-dcae9.firebaseapp.com",
  projectId: "hackathon-dcae9",
  storageBucket: "hackathon-dcae9.appspot.com",
  messagingSenderId: "958576822460",
  appId: "1:958576822460:web:28955f13684f995aef68b9",
  measurementId: "G-GP136WW208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
