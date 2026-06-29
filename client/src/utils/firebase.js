
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "examnotesai-4b733.firebaseapp.com",
  projectId: "examnotesai-4b733",
  storageBucket: "examnotesai-4b733.firebasestorage.app",
  messagingSenderId: "923376142767",
  appId: "1:923376142767:web:5baf3e9798efc99a48c75a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}