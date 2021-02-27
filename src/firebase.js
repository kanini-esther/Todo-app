
import firebase from "firebase";
const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyBNXI_A3rUX-rrcjYdy8ju2XjLsc_dYLIM",
    authDomain: "todo-app-7a649.firebaseapp.com",
    projectId: "todo-app-7a649",
    storageBucket: "todo-app-7a649.appspot.com",
    messagingSenderId: "747388449138",
    appId: "1:747388449138:web:aabc8f03e01be163156deb",
    measurementId: "G-XCN83KKCHE"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db};
