import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDDTllWWnb4iB4OmNViHP7s41CmINNm9E0",
    authDomain: "book-santa-30b0f.firebaseapp.com",
    projectId: "book-santa-30b0f",
    storageBucket: "book-santa-30b0f.appspot.com",
    messagingSenderId: "674094161337",
    appId: "1:674094161337:web:cdbddd6f0a732571dfaa68"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();