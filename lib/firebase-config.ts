import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCxM0t12RqfpfsXDkUoqdyurhk2jd1B-dE",
    authDomain: "dkutas-nextjs.firebaseapp.com",
    projectId: "dkutas-nextjs",
    storageBucket: "dkutas-nextjs.appspot.com",
    messagingSenderId: "520421330265",
    appId: "1:520421330265:web:202a99ebe9ec9f27d99048",
    measurementId: "G-4KKCC02VDD"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }