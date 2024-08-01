// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";



const firebaseConfig = {

  apiKey: "AIzaSyAbo9ubEnQL6f1_Py2F7MxdUxaGAfCjAVg",

  authDomain: "living-word-god-faith.firebaseapp.com",

  projectId: "living-word-god-faith",

  storageBucket: "living-word-god-faith.appspot.com",

  messagingSenderId: "622905821849",

  appId: "1:622905821849:web:aee8a97f01b65abd33c608"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const livingFaith = getFirestore(app);
const storage = getStorage(app);
export const livingFaithStorage = getStorage(app)
export { storage, ref, getDownloadURL };
