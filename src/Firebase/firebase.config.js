// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB89pG3_LEX2oqn2hLzfarS7NllQk8Ck5Y",
  authDomain: "dragon-news-web-e865b.firebaseapp.com",
  projectId: "dragon-news-web-e865b",
  storageBucket: "dragon-news-web-e865b.firebasestorage.app",
  messagingSenderId: "729951358994",
  appId: "1:729951358994:web:8ada6b3194bb18c21c08cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);