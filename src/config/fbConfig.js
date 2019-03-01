import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD54DaX6qEP8kmA4mZfF3IFw_N3FfxYxsg",
    authDomain: "new-employee-quiz.firebaseapp.com",
    databaseURL: "https://new-employee-quiz.firebaseio.com",
    projectId: "new-employee-quiz",
    storageBucket: "new-employee-quiz.appspot.com",
    messagingSenderId: "129539135434"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ });

  export default firebase;
