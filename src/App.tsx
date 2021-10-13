import React, { useState } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';

import "./style/style.scss";

interface UserInfo {
  email: string,
  name: string,
}

const App = () => {

  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    name: ""
  });
  const [logged, setLogged] = useState(false);

  return (
    <div className="container">
      {!logged &&
        <Login
          setUserInfo={setUserInfo}
          setLogged={setLogged}
        />
      }
      {logged &&
        <Logout
          setUserInfo={setUserInfo}
          setLogged={setLogged}
        />
      }

      {logged &&
        <div className="user-info">
          <span><strong>Nome: </strong>{userInfo.name}</span>
          <span><strong>E-mail: </strong>{userInfo.email}</span>
        </div>
      }

      {console.log(userInfo)}
    </div>
  );
}

export default App;
