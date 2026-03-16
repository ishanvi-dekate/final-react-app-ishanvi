import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { db } from './firebase';

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
  
  const AddItem = () => {
    const [text, setText] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (text.trim() === '') return;
  
      try {
        await addDoc(collection(db, "items"), {
          text: text,
          createdAt: Timestamp.now()
        });
        setText('');
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter item text"
        />
        <button type="submit">Add Item</button>
      </form>
    );
  };

  const ItemList = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const q = query(collection(db, "items"), orderBy("createdAt", "desc")); 
  
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const itemsList = [];
        querySnapshot.forEach((doc) => {
          itemsList.push({ id: doc.id, ...doc.data() }); 
        });
        setItems(itemsList);
      });

      return () => unsubscribe();
    }, []);
  
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text} - {item.createdAt.toDate().toLocaleDateString()}
          </li>
        ))}
      </ul>
    );
  };
  
  export default { AddItem, ItemList };