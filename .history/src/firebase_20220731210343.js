import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDO3p0fAu2rbsFEx6J5uJSnGHh6s0akOxQ',
  authDomain: 'business-card-maker-ed3dc.firebaseapp.com',
  projectId: 'business-card-maker-ed3dc',
  storageBucket: 'business-card-maker-ed3dc.appspot.com',
  messagingSenderId: '1016344517138',
  appId: '1:1016344517138:web:5dba8c97fa45e54e2b56cb',
};
const firebaseApp = initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export default provider;
export const firebaseApp;
