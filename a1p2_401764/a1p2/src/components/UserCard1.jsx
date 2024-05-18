// src/components/UserCard1.jsx

import React from "react";

function UserCard1(props) {
 
  const {name ,email}=  props
 
  return (
    <div>
      <h3>{ name}</h3>
      <p>{ email}</p>
    </div>
  );
}

export default UserCard1;
