import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDPdVPTV0d4jqLXl8KOPHNl95fvgiVIB0E",
  authDomain: "almohadillas-epson.firebaseapp.com",
  projectId: "almohadillas-epson",
  storageBucket: "almohadillas-epson.appspot.com",
  messagingSenderId: "984513172518",
  appId: "1:984513172518:web:ec19c33447c4a2d54082e7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };