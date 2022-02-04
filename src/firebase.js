import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDriJ-INi43GdYzTGsKK58sZdLXUF3PlR8",
  authDomain: "unichat-f1354.firebaseapp.com",
  projectId: "unichat-f1354",
  storageBucket: "unichat-f1354.appspot.com",
  messagingSenderId: "563023849139",
  appId: "1:563023849139:web:1f0c319ee58451c74c32c6"
}).auth()
