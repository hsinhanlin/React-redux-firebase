import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "Example_key",
  authDomain: "Example_key",
  databaseURL: "Example_key",
  projectId: "laced-platypus",
  storageBucket: "Example_key",
  messagingSenderId: "Example_key",
  appId: "Example_key"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
