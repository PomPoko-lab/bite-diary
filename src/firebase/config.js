import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJETyA6p3I-baZleDqG20Ti-T8iwzuKGo',
  authDomain: 'bite-diary.firebaseapp.com',
  projectId: 'bite-diary',
  storageBucket: 'bite-diary.appspot.com',
  messagingSenderId: '627616461893',
  appId: '1:627616461893:web:fe678c1a7847e67526df2c',
};

initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { db, storage };
