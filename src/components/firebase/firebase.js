import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyAmQ8frTL1VbrTRxckm24IX4QrXPXnT2E4",
    authDomain: "registration-form-d5021.firebaseapp.com",
    databaseURL: "https://registration-form-d5021-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "registration-form-d5021",
    storageBucket: "registration-form-d5021.appspot.com",
    messagingSenderId: "264025994674",
    appId: "1:264025994674:web:946c12d8412fc5c0a060ab",
    measurementId: "G-Z5RGYD3RHK"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, app, }
