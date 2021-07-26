import firebase from "firebase";

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyC-xZwaZwbGuAu2tiXql-eoEEfEZLXPi_4",
    authDomain: "todo-app-cp-8921a.firebaseapp.com",
    projectId: "todo-app-cp-8921a",
    storageBucket: "todo-app-cp-8921a.appspot.com",
    messagingSenderId: "1092421340372",
    appId: "1:1092421340372:web:954ac5e9aafc8bc0dd3f41",
    measurementId: "G-TQQRFQZ48K"
});

const db = firebaseApp.firestore();

export default db;