import auth from './firebase.js';

import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

class AuthService {
  // 회원가입
  register(id, password) {
    createUserWithEmailAndPassword(auth, id, password) //
      .then((userCredential) => {
        const registerUser = userCredential.user;
        console.log(registerUser);
      });
  }

  // 로그아웃
  logOut() {
    signOut(auth);
  }
  // 이메일 로그인
  loginWithEmail(id, password) {
    signInWithEmailAndPassword(auth, id, password) //
      .then((data) => {
        console.log(data);
      });
  }

  // 소셜 로그인
  loginWithSocial = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        console.log(data);
      });
  };

  //  로그인 확인
  confirmUser() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    }

  })
}

export default AuthService;
