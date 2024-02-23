

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDh4OaDMI9LCcghGpmWaeBOh1xmlJ1PvkY",
  authDomain: "udemy--vue-firebase-sites.firebaseapp.com",
  projectId: "udemy--vue-firebase-sites",
  storageBucket: "udemy--vue-firebase-sites.appspot.com",
  messagingSenderId: "601060018290",
  appId: "1:601060018290:web:f8c3eea818cb97c1c69aeb"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }