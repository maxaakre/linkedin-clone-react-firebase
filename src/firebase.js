import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAomVoE1G36rLuF91_K2RW5dSmknLmtr5M",
  authDomain: "linkedin-clone-307a2.firebaseapp.com",
  projectId: "linkedin-clone-307a2",
  storageBucket: "linkedin-clone-307a2.appspot.com",
  messagingSenderId: "1051800719581",
  appId: "1:1051800719581:web:ee6a9648e636a4196f0b34",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, db, provider, storage };
export default db;
