import React from 'react';

import { GoogleLogin } from 'react-google-login'

const clientID = "693257481156-0fccd9m0hbkd5jvhhvpmvgjluivg4bps.apps.googleusercontent.com";

interface expectedProps {
  setUserInfo: Function,
  setLogged: Function
}

const Login: React.FC<expectedProps> = (props) => {

  const handleSuccess = (response: any) => {
    props.setLogged(true);
    props.setUserInfo(response.profileObj);
    localStorage.setItem('googleID', response.googleId);
  }

  const handleFailure = (error: any) => {
    console.log('Failure', error);
  }

  return (
    <GoogleLogin
      clientId={clientID}
      buttonText="Login"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  )
}

export default Login;