
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBUEb8JyS4FpEXNih0mduMCtroIgwFIhg8" ,
  authDomain: "preppilotai-d4784.firebaseapp.com",
  projectId: "preppilotai-d4784",
  storageBucket: "preppilotai-d4784.firebasestorage.app",
  messagingSenderId: "755718198377",
  appId: "1:755718198377:web:d9161978776a073aaf7ef8"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}