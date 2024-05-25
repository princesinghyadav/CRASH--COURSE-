// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{ isLoggedIn ? <p> login suceesful</p>:<p>log in Fail</p>}</div>;
}

export default LoginMessage;
