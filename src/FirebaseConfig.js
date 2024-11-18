import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPgHyTB7ZtN4ffIdE_znWj5G6qHS14Bp8",
  authDomain: "mfs-technical.firebaseapp.com",
  projectId: "mfs-technical",
  storageBucket: "mfs-technical.firebasestorage.app",
  messagingSenderId: "1063990973964",
  appId: "1:1063990973964:web:5084d0e3dd8dc4b2cac029"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };
