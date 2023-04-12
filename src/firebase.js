import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJfY1SO3UKUYYySgV_kJapPdVyQ6922Ns",
  authDomain: "linkedin-clone-swame.firebaseapp.com",
  databaseURL: "https://linkedin-clone-swame-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-swame",
  storageBucket: "linkedin-clone-swame.appspot.com",
  messagingSenderId: "1022760428020",
  appId: "1:1022760428020:web:12df6061d818a0915199a1",
  measurementId: "G-5KNXRVXDS6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

