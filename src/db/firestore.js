import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const configuration = {
    apiKey: "AIzaSyDgKeK1Av56h3e4MqSDFpF0k1z5YeQo_KY",
    authDomain: "nowshera-welfare-foundation.firebaseapp.com",
    projectId: "nowshera-welfare-foundation",
    storageBucket: "nowshera-welfare-foundation.appspot.com",
    messagingSenderId: "154017335880",
    appId: "1:154017335880:web:19aecd5fb18c0a243b667d"
}

firebase.initializeApp(configuration);

const db = firebase.firestore();

export default db;