
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyCJHUArAt2jE_qb6yDQ5yESylJ_59LHqj8",
  authDomain: "beermendoza-87781.firebaseapp.com",
  projectId: "beermendoza-87781",
  storageBucket: "beermendoza-87781.appspot.com",
  messagingSenderId: "341624912377",
  appId: "1:341624912377:web:f6f5217942b832a857a528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productCollection = collection(db , "products");