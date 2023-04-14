import { initializeApp } from 'firebase/app'
import { collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "linkedin-f2378.firebaseapp.com",
  projectId: "linkedin-f2378",
  storageBucket: "linkedin-f2378.appspot.com",
  messagingSenderId: "114295464351",
  appId: "1:114295464351:web:3b9d3618623d53988e5daa"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore()

export { db, auth, collection}


