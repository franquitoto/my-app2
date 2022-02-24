import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnReIPOen5K9G0E8zYYEyUB0PgL5VJSm4",
  authDomain: "my-app2-7b8a3.firebaseapp.com",
  projectId: "my-app2-7b8a3",
  storageBucket: "my-app2-7b8a3.appspot.com",
  messagingSenderId: "1055227035675",
  appId: "1:1055227035675:web:874ead6101ad85a05738be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);