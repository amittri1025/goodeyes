import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwN7XPUG3ng-AtJsf5EJXz_khWG_Kv_To",
  authDomain: "goodeyesamit.firebaseapp.com",
  projectId: "goodeyesamit",
  storageBucket: "goodeyesamit.appspot.com",
  messagingSenderId: "611559956100",
  appId: "1:611559956100:web:2cef31ef91138cc7356cd1",
  measurementId: "G-Q85RCESKNT"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
