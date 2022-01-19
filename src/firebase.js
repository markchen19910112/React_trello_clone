import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ08yFdA7Tz-KD4jHVI1gCy1jCVI8qCW0",
  authDomain: "test-b58b7.firebaseapp.com",
  databaseURL: "https://test-b58b7-default-rtdb.firebaseio.com",
  projectId: "test-b58b7",
  storageBucket: "test-b58b7.appspot.com",
  messagingSenderId: "581892965629",
  appId: "1:581892965629:web:8d8b249350bb1c5672ea94",
  measurementId: "G-TZW21JDFQ1",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
