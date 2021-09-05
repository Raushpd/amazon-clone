import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCftAe_O_AIZkkc7VqNO4DML1ohHi1nB1I",
    authDomain: "clone-8bce6.firebaseapp.com",
    projectId: "clone-8bce6",
    storageBucket: "clone-8bce6.appspot.com",
    messagingSenderId: "723171247733",
    appId: "1:723171247733:web:5e8d173dd8f0f4bf42da3c",
    measurementId: "G-X6E72VD39E"
});

const auth = firebase.auth();

export { auth };