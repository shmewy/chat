// src/firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjvy5EKuRxrDyAkwDV9m0RToBLv4kwRec",
    authDomain: "lunatechatapp.firebaseapp.com",
    projectId: "lunatechatapp",
    storageBucket: "lunatechatapp.appspot.com",
    messagingSenderId: "272689538726",
    appId: "1:272689538726:web:15f5be1bb794f8f735b667",
    measurementId: "G-Y09M65WGJL"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
