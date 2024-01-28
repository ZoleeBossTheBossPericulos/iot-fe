import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_DWheLKLgbPQeDVWYg3VC0sTKHN4ckLE",
  authDomain: "iot-project-9bf75.firebaseapp.com",
  projectId: "iot-project-9bf75",
  storageBucket: "iot-project-9bf75.appspot.com",
  messagingSenderId: "506526340760",
  appId: "1:506526340760:web:44cfcf7218f481543662ed",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
