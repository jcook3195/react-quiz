import authReducer from './authReducer';
import quizReducer from './quizReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
  firestore: firestoreReducer
});

export default rootReducer;
