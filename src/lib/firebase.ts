import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC-ZuoxqaIP0P6YIZwSNVCS5jIkKAIjsA4",
  authDomain: "zapsters-main.firebaseapp.com",
  projectId: "zapsters-main",
  storageBucket: "zapsters-main.firebasestorage.app",
  messagingSenderId: "1000953592212",
  appId: "1:1000953592212:web:5102ddc86a95c836ef7781",
  measurementId: "G-C7GYWQWSKX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);