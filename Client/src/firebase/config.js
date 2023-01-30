import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firesore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOk1B0_7RKrXTEJ-Enz6ZS3YO7BdtUhZc",
  authDomain: "blog-gallery-b3e21.firebaseapp.com",
  projectId: "blog-gallery-b3e21",
  storageBucket: "blog-gallery-b3e21.appspot.com",
  messagingSenderId: "379617116721",
  appId: "1:379617116721:web:b1fbba1223a0eb23260b10",
  measurementId: "G-PZ9ZEZBF5D",
};
const app = initializeApp(firebaseConfig);
const projectstorage = firebase.storage();
const projectFirestore = firebase.firestore();
export { projectstorage, projectFirestore };
