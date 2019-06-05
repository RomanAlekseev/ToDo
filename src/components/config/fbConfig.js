import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//initilise fireBase
var config = {
  apiKey: "AIzaSyAJ7y7yyhtC8J6rboLputigFmd_ZKFRFn0",
  authDomain: "net-ninja-marioplan-da7f4.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-da7f4.firebaseio.com",
  projectId: "net-ninja-marioplan-da7f4",
  storageBucket: "net-ninja-marioplan-da7f4.appspot.com",
  messagingSenderId: "564200927311",
  appId: "1:564200927311:web:e7d96e12c3537680"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
