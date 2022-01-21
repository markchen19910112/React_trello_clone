import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxKBurLG6BACXhwa0cGvF4raEn-1yNC5Y",
  authDomain: "trello-clone-57048.firebaseapp.com",
  databaseURL: "https://trello-clone-57048-default-rtdb.firebaseio.com",
  projectId: "trello-clone-57048",
  storageBucket: "trello-clone-57048.appspot.com",
  messagingSenderId: "484580945118",
  appId: "1:484580945118:web:ee11a4cee91eed34dda64f",
  measurementId: "G-PE0P191CBK",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
