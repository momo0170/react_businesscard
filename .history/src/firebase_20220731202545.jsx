// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function Firebase() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyDO3p0fAu2rbsFEx6J5uJSnGHh6s0akOxQ',
    authDomain: 'business-card-maker-ed3dc.firebaseapp.com',
    projectId: 'business-card-maker-ed3dc',
    storageBucket: 'business-card-maker-ed3dc.appspot.com',
    messagingSenderId: '1016344517138',
    appId: '1:1016344517138:web:5dba8c97fa45e54e2b56cb',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var provider = new firebase.auth.GoogleAuthProvider();
  console.log(app);
  console.log(provider);

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  return <div>HI</div>;
}

export default Firebase;
