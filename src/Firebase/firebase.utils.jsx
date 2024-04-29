import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD5h_3Arpt9t4_g2r_PFjkY-YMCACpkvAw",
    authDomain: "personal-cloth.firebaseapp.com",
    projectId: "personal-cloth",
    storageBucket: "personal-cloth.appspot.com",
    messagingSenderId: "503117157297",
    appId: "1:503117157297:web:33a109482b2043fed16390",
    measurementId: "G-QS7ECH3JMX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Function to sign in with Google
export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error("Error signing in with Google:", error);
    }
};
