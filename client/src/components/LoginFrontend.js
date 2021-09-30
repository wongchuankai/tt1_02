import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import customers from "../Dataset/customers.json";

function loginUser(credentials) {
  const user = customers.find((item) => item.username === credentials.username);
  if (user) {
    if (user.password === credentials.password) {
      return true;
    }
  }
  return false;
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = loginUser({
      username,
      password,
    });
    console.log(token);
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Log In Here</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
