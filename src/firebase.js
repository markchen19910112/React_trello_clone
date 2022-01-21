import { initializeApp } from "firebase/app";
<<<<<<< Updated upstream
import { getDatabase } from "firebase/database";
=======
import { getFirestore, serverTimestamp } from "firebase/firestore";
>>>>>>> Stashed changes

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
const db = getFirestore();
const timestamp = serverTimestamp();

<<<<<<< Updated upstream
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
=======
export { app, db, timestamp };
>>>>>>> Stashed changes
