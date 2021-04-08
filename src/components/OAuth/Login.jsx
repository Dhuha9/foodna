import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken.js';
import './GoogleButton.scss';
import { UserContext } from '../../App';

const clientId =
  '161545215382-ens5ss0r0novf8hdq5dc8scabpc4v4j0.apps.googleusercontent.com';

function Login() {
  const userContext = useContext(UserContext);

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(`Logged in successfully welcome ${res.profileObj.name} 😍.`);
    localStorage.setItem('currentUser', JSON.stringify(res.profileObj));
    // var userInfo = JSON.parse(localStorage.getItem('res.profileObj')); <-- This line can be used to get the user's info from local storage
    refreshTokenSetup(res);
    userContext.refresh(JSON.parse(localStorage.getItem('currentUser')));
  };

  const onFailure = () => {
    // alert(`Failed to login. 😢`);
    userContext.refresh(JSON.parse(localStorage.getItem('currentUser')));
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
