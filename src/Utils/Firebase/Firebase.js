import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBv7-RrdvulftjvqfI9I9fzqop0sEuIk8Y",
  authDomain: "netflix-a68a0.firebaseapp.com",
  projectId: "netflix-a68a0",
  storageBucket: "netflix-a68a0.firebasestorage.app",
  messagingSenderId: "216917455734",
  appId: "1:216917455734:web:687ed37c3573faace34057",
  measurementId: "G-C5S6WPLRTF"
};

export const app = initializeApp(firebaseConfig);