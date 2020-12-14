import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBASYdpJu-cgTw8KJ2QnxG7B9QDUXf25ow",
    authDomain: "myap-57961.firebaseapp.com",
    databaseURL: "https://myap-57961.firebaseio.com",
    projectId: "myap-57961",
    storageBucket: "myap-57961.appspot.com",
    messagingSenderId: "626364509809",
    appId: "1:626364509809:web:749049d207237ba51d35d0",
    measurementId: "G-DSN1TMSG4E"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

