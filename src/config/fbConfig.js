import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRYsMkj4-vKpzz4-EfasUXjsjcRd1VkfI",
  authDomain: "laced-platypus.firebaseapp.com",
  databaseURL: "https://laced-platypus.firebaseio.com",
  projectId: "laced-platypus",
  storageBucket: "laced-platypus.appspot.com",
  messagingSenderId: "131951710836",
  appId: "1:131951710836:web:b0eeaa628ebef214dab721"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapShots: true });

export default firebase;
