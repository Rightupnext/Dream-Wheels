// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbweb1cmLiV3S9zLwg8bkyhEgLdnebGgA",
  authDomain: "cars-88a2e.firebaseapp.com",
  databaseURL: "https://cars-88a2e-default-rtdb.firebaseio.com",
  projectId: "cars-88a2e",
  storageBucket: "cars-88a2e.firebasestorage.app",
  messagingSenderId: "125142785107",
  appId: "1:125142785107:web:a9a442540447a9db283aa6",
  measurementId: "G-K8RVD17ZW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app); // Export Firebase Storage
export default app;
