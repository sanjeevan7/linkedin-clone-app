import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEIys8reo435HTK_DgHAMofda7U9suEkY",
  authDomain: "linkedin-clone-3e639.firebaseapp.com",
  projectId: "linkedin-clone-3e639",
  storageBucket: "linkedin-clone-3e639.appspot.com",
  messagingSenderId: "30842697363",
  appId: "1:30842697363:web:33e0b37989d0bae100ff66",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
