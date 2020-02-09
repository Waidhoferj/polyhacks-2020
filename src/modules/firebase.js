import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyB2hk1ykIc1D1pP1n2xRle_ZGHG7MVdhE4",
  authDomain: "polyhacks-2020.firebaseapp.com",
  databaseURL: "https://polyhacks-2020.firebaseio.com",
  projectId: "polyhacks-2020",
  storageBucket: "polyhacks-2020.appspot.com",
  messagingSenderId: "505806295931",
  appId: "1:505806295931:web:f5673304dbb6f91ff923de",
  measurementId: "G-M6JEGW1960"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const storage = firebase.storage().ref();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
