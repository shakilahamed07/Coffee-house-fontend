import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxf8WP4uGCKlNPXbUsoZkCHN9xSRlff1Q",
  authDomain: "coffee-house-46c89.firebaseapp.com",
  projectId: "coffee-house-46c89",
  storageBucket: "coffee-house-46c89.firebasestorage.app",
  messagingSenderId: "237652439107",
  appId: "1:237652439107:web:109ac8f9b432a3990ee4f6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);