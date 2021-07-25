import firebase from "firebase";

const firebaseApp = firebase.initializeApp({ 
    apiKey: "",
    authDomain: "",
    projectId: "todo-app-cp-8921a",
    storageBucket: "todo-app-cp-8921a.appspot.com",
    messagingSenderId: "1092421340372",
    appId: "",
    measurementId: "G-TQQRFQZ48K"
});

const db = firebaseApp.firestore();

export { db }