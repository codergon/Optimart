import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABjv2wHVCORi3-aYoJyPfJ1mo25XUH4Ps",
  authDomain: "optimart-b2d56.firebaseapp.com",
  projectId: "optimart-b2d56",
  storageBucket: "optimart-b2d56.appspot.com",
  messagingSenderId: "734633802412",
  appId: "1:734633802412:web:cc682e284ff584d311bd09",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, app };
