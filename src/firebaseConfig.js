import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTH6r-VKPiTZiGMI4RswDcQ_lISbCBcPY",
  authDomain: "proyecto-firebase-a056c.firebaseapp.com",
  projectId: "proyecto-firebase-a056c",
  storageBucket: "proyecto-firebase-a056c.appspot.com",
  messagingSenderId: "1005926333864",
  appId: "1:1005926333864:web:7d55939b232bdead0af19d",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
