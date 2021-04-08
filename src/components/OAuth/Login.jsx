import React from 'react';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken.js';
import PropTypes from 'prop-types';
import './GoogleButton.scss';

const clientId =
  '161545215382-ens5ss0r0novf8hdq5dc8scabpc4v4j0.apps.googleusercontent.com';

function Login({ handleUser }) {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(`Logged in successfully welcome ${res.profileObj.name} 😍.`);
    localStorage.setItem('currentUser', JSON.stringify(res.profileObj));
    // var userInfo = JSON.parse(localStorage.getItem('res.profileObj')); <-- This line can be used to get the user's info from local storage
    refreshTokenSetup(res);
    handleUser();
  };

  const onFailure = () => {
    // console.log('Login failed: res:', res);
    // alert(`Failed to login. 😢`);
    handleUser();
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
Login.propTypes = {
  handleUser: PropTypes.func.isRequired,
};
