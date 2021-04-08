import React from 'react';
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types';
import './GoogleButton.scss';
import { createBrowserHistory } from 'history';
import { useHistory } from 'react-router-dom';

const clientId =
  '161545215382-ens5ss0r0novf8hdq5dc8scabpc4v4j0.apps.googleusercontent.com';

function Logout({ handleUser }) {
  let history = useHistory();

  const onSuccess = () => {
    const currentHistory = createBrowserHistory();
    const currentPath = currentHistory.location.pathname;
    if (currentPath == '/donate') {
      history.goBack();
    }
    localStorage.removeItem('currentUser');
    handleUser();
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
Logout.propTypes = {
  handleUser: PropTypes.func.isRequired,
};
