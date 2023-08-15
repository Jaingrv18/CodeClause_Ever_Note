import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Your Firebase Data
  apiKey: "AIzaSyBYwvfvbzP4Vv5ysljxiYOe5KXuZ6W9nvk",
  authDomain: "evernote-b53ed.firebaseapp.com",
  projectId: "evernote-b53ed",
  storageBucket: "evernote-b53ed.appspot.com",
  messagingSenderId: "917712397013",
  appId: "1:917712397013:web:cf43825febb4e1d289385c"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)