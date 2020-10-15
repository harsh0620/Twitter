import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpnx8Ne5eFgRh4oLCSrltHTAMWdpR5-jY",
  authDomain: "twitter-9c374.firebaseapp.com",
  databaseURL: "https://twitter-9c374.firebaseio.com",
  projectId: "twitter-9c374",
  storageBucket: "twitter-9c374.appspot.com",
  messagingSenderId: "352778770802",
  appId: "1:352778770802:web:046a970e20a81a1f4ba5eb",
  measurementId: "G-NYLJDPXXJD"
};
  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  export default db;