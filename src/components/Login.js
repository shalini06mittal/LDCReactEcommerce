import React, { useState } from "react";

import "./login.css";

export default function Login() {
  
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}