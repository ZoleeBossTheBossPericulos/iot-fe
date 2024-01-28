import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_DWheLKLgbPQeDVWYg3VC0sTKHN4ckLE",
  authDomain: "iot-project-9bf75.firebaseapp.com",
  databaseURL:
    "https://iot-project-9bf75-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iot-project-9bf75",
  storageBucket: "iot-project-9bf75.appspot.com",
  messagingSenderId: "506526340760",
  appId: "1:506526340760:web:a8fdf57904a419f83662ed",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
