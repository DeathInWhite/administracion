import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBwS_E0SZ-PmwKj5yKy2iG5X7KJZNWZOv0",
    authDomain: "administracion-7a496.firebaseapp.com",
    databaseURL: "https://administracion-7a496.firebaseio.com",
    projectId: "administracion-7a496",
    storageBucket: "administracion-7a496.appspot.com",
    messagingSenderId: "365789775592",
    appId: "1:365789775592:web:7e40443f0227941ccc6b5d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {db}