import firebase from "firebase";

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "clone-ac8f9.firebaseapp.com",
  databaseURL: "https://clone-ac8f9.firebaseio.com",
  projectId: "clone-ac8f9",
  storageBucket: "clone-ac8f9.appspot.com",
  messagingSenderId: "760695638884",
  appId: "1:760695638884:web:8b3a2cd576705b92138871",
  measurementId: "G-FT43PB9JD7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

