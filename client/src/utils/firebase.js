import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-25174.firebaseapp.com",
  projectId: "fir-25174",
  storageBucket: "fir-25174.firebasestorage.app",
  messagingSenderId: "74453849091",
  appId: "1:74453849091:web:f425529a9084b2dd3dea36"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}