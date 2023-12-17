// config.js
import { initializeApp } from 'firebase/app';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STOREAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};

// Initialize Firebase
let firebaseApp;
try {
    firebaseApp = initializeApp(firebaseConfig);
    console.log('Connected to Firebase!');
} catch (error) {
    console.error('Error connecting to Firebase:', error);
}

let db;
try {
    db = getFirestore(firebaseApp);
    console.log('Firestore database connected!');
} catch (error) {
    console.error('Error connecting to Firestore:', error);
}

const User = collection(db, 'Users');

export { User, addDoc };
