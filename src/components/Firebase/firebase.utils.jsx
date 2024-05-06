import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD5h_3Arpt9t4_g2r_PFjkY-YMCACpkvAw",
    authDomain: "personal-cloth.firebaseapp.com",
    projectId: "personal-cloth",
    storageBucket: "personal-cloth.appspot.com",
    messagingSenderId: "503117157297",
    appId: "1:503117157297:web:33a109482b2043fed16390",
    measurementId: "G-QS7ECH3JMX"
};


export const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const signInWithEmail = signInWithEmailAndPassword;
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error("Error signing in with Google:", error);
    }
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

const userRef = doc(db, "users", userAuth.uid);
const snapshot = await getDoc(userRef); 

if (snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
    await setDoc(userRef, { 
    displayName,
    email,
    createdAt,
    ...additionalData,
    });
    console.log("User profile document created!");
    } catch (error) {
        console.error('Error creating user:', error.message);
    }
}
return userRef;
};

export {db, doc, getDoc};