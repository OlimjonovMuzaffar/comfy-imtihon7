import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCg_5mPqlVUVxnguwvw2WoN8Q67b8p-e_E",
  authDomain: "comfy-889f9.firebaseapp.com",
  projectId: "comfy-889f9",
  storageBucket: "comfy-889f9.appspot.com",
  messagingSenderId: "1081649129372",
  appId: "1:1081649129372:web:1664dba2b8871e4b378a59",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
 export const signUpWithGoogleAccount = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
