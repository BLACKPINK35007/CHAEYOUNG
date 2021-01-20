import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDBy3mTBwXinhylYOi1wL20tyHV13bt2Ws",
    authDomain: "jendukie-turned-25-in-2021.firebaseapp.com",
    projectId: "jendukie-turned-25-in-2021",
    storageBucket: "jendukie-turned-25-in-2021.appspot.com",
    messagingSenderId: "708212081853",
    appId: "1:708212081853:web:b2e2a12fc9465e8c1963d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()