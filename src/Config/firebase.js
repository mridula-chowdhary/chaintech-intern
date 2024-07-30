
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyC3-rrCN-YacpCGCjYBn5bxqdeFNDKNg-M",
  authDomain: "chaintech-intern.firebaseapp.com",
  projectId: "chaintech-intern",
  storageBucket: "chaintech-intern.appspot.com",
  messagingSenderId: "885023248542",
  appId: "1:885023248542:web:2bb5241eb8d385d6a92b8f",
  measurementId: "G-CFJ24J3RH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db };
