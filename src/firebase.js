import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD7t_FSIWi_2p9oEQaSEAYHeGRbBjCqobw",
  authDomain: "snapchat-eee21.firebaseapp.com",
  projectId: "snapchat-eee21",
  storageBucket: "snapchat-eee21.appspot.com",
  messagingSenderId: "390720943815",
  appId: "1:390720943815:web:c60efb556b09c75f47b0e2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
