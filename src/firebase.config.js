// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkgvyaP9sSp74-Dn_ZD-I14vHgXa_Mokk",
  authDomain: "yt-9e032.firebaseapp.com",
  projectId: "yt-9e032",
  storageBucket: "yt-9e032.appspot.com",
  messagingSenderId: "129253675569",
  appId: "1:129253675569:web:e75079daee897bb3d6bb10",
  measurementId: "G-7WSPZRDVBH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig