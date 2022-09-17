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
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  }

  // 소셜 로그인
  loginWithSocial() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    return signInWithPopup(auth, provider); // popup을 이용한 signup
  }

  // 현재 로그인한 사용자 가져오기
  // 사용자의 로그인 상태가 변경될 때, 즉 로그인 / 로그아웃을 했을 때 관찰자가 호출됨
  confirmUser(setInit) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('사용자 정보 확인');
        console.log(user);
        goToMain(user.id);
      } else {
        console.log('로그인 안됨');
      }
      setInit(true);
    });
  }
}

export default AuthService;
