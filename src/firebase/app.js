import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMPM-xMXnttB7yKXfgO1NuF-Sze6ipqIA",
  authDomain: "joyeria-sagitario.firebaseapp.com",
  projectId: "joyeria-sagitario",
  storageBucket: "joyeria-sagitario.appspot.com",
  messagingSenderId: "587094835451",
  appId: "1:587094835451:web:f05ba696aac0a6aa5df05e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
