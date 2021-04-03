import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '161545215382-ens5ss0r0novf8hdq5dc8scabpc4v4j0.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    localStorage.removeItem('currentUser');
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;