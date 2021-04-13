import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import './GoogleButton.scss';
import { createBrowserHistory } from 'history';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const clientId =
  '161545215382-ens5ss0r0novf8hdq5dc8scabpc4v4j0.apps.googleusercontent.com';

function Logout() {
  let history = useHistory();
  const userContext = useContext(UserContext);

  const onSuccess = () => {
    const currentHistory = createBrowserHistory();
    const currentPath = currentHistory.location.pathname;
    if (currentPath == '/donate' || currentPath == '/recieve/:id') {
      history.goBack();
    }
    localStorage.removeItem('currentUser');
    userContext.refresh(JSON.parse(localStorage.getItem('currentUser')));
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
