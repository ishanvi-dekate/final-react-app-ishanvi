import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDvJvDs51KU5X0CKrr36SQMVd1LXeD0d9E",
    authDomain: "react-firebase-app-2b73c.firebaseapp.com",
    projectId: "react-firebase-app-2b73c",
    storageBucket: "react-firebase-app-2b73c.firebasestorage.app",
    messagingSenderId: "358895993487",
    appId: "1:358895993487:web:eab8794e53988d9363a6fa"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();
  