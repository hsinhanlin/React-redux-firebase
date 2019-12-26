import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import fbConfig from "./config/fbConfig";
import firebase from 'firebase/app';

import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore
} from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

import "firebase/firestore";

// const fbConfig = {
//   userProfile: "projects",
//   useFirestoreForProfile: true
// };

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
     reactReduxFirebase(fbConfig)
  )
);

// const rffProps = {
//   firebase,
//   useFirestoreForProfile: true,
//   config: fbConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance
// };

ReactDOM.render(
  <Provider store={store}>
    
      <App />
    
  </Provider>,
  document.getElementById("root")
);
