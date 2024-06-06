// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
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