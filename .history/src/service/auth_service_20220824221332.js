import './service/firebase.js';

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
    register(id ,password) {
      createUserWithEmailAndPassword(auth, id, password) //
        .then((userCredential) => {
          var registerUser = userCredential.user;
          console.log(registerUser);
        });
    };
  
    // 이메일 로그인
    const emailLogin = (e) => {
      e.preventDefault();
      loginInputId.current.value = '';
      loginInputPassword.current.value = '';
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
          const data = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    };
  
    // 구글 로그인
    const googleLogin = () => {
      const provider = new GoogleAuthProvider(); // provider를 구글로 설정
      signInWithPopup(auth, provider) // popup을 이용한 signup
        .then((data) => {
          setGoogleUserData(data.user); // user data 설정
          console.log(data); // console로 들어온 데이터 표시
          confirmAccount();
          navigate('/main');
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    //  로그인 확인
    const confirmAccount = () => {
      onAuthStateChanged(auth, (user) => {
        console.log(user);
        if (user) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      });
    };
}

export default AuthService;
