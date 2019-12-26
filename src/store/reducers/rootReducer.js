import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {firebasereducer} from 'react-redux-firebase';
import {firebasereducer} from 'redux-firestore';

import { combineReducers } from 'redux';

const rootReducer =  combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;