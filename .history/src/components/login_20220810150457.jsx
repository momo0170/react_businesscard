import React from 'react';

function Login({
  googleLogin,
  googleUserData,
  register,
  emailLogin,
  setGoogleUserData,
  emailUserData,
  setEmailUserData,
  setLoginEmail,
  setLoginPassword,
}) {
  return (
    <div>
      {/* 구글 로그인 */}
      <div>
        <button onClick={googleLogin}>Login</button>
        {googleUserData ? googleUserData.displayName : null}
      </div>
      <div>{googleUserData ? googleUserData.email : null}</div>

      {/* 이메일 로그인 */}
      <input
        placeholder="Email"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <button onClick={emailLogin}>Login</button>
    </div>
  );
}

export default Login;
