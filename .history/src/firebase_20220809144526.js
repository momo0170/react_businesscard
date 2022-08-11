import { initializeApp } from 'firebase/app';
import { getAuth } 'firebase/auth';

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_ID,
  appId: REACT_APP_APP_ID,
};
const firebaseApp = initializeApp(firebaseConfig);

export const provider = new firebaseApp.auth.GoogleAuthProvider();
