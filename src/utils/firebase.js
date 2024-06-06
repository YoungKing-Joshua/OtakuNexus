// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

console.log("Firebase API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "animeblog-abdcc.firebaseapp.com",
  projectId: "animeblog-abdcc",
  storageBucket: "animeblog-abdcc.appspot.com",
  messagingSenderId: "72917642992",
  appId: "1:72917642992:web:9bba2944ebe8504cf91c35",
  measurementId: "G-W96RTTFVF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
