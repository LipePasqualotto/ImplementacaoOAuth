import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientID = "693257481156-0fccd9m0hbkd5jvhhvpmvgjluivg4bps.apps.googleusercontent.com";

interface expectedProps {
  setUserInfo: Function,
  setLogged: Function,
}

const Logout: React.FC<expectedProps> = (props) => {

  const handleSuccess = () => {
    console.log('Logout Success');
    props.setLogged(false);
    props.setUserInfo({});
    localStorage.setItem('googleID', '');
  }

  return (
    <GoogleLogout
      clientId={clientID}
      buttonText="Logout"
      onLogoutSuccess={handleSuccess}
    />
  );
}

export default Logout;