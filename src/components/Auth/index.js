import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <label htmlFor="login">Login:</label>
      <input name="login" type="text" />
      <label htmlFor="password">Password:</label>
      <input name="password" type="text" />
      <Link to="/">
        <button>Sign in</button>
      </Link>
    </div>
  );
};

export default Auth;
