import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "./Login.css";

const Login = () => {
  const { loginHandler, loginCredentials, setLoginCredentials } = useAuth();

  const loginForm = (event) => {
    event.preventDefault();
    loginHandler(loginCredentials.email, loginCredentials.password);
  };

  const testHandler = (event) => {
    event.preventDefault();
    setLoginCredentials({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
  };

  return (
    <section className="login-signup-page">
      <div className="login-signup-form login-form">
        <h1 className="form-heading margin-bottom-2rem">LOGIN</h1>
        <form action="">
          <label htmlFor="email"></label>
          <input
            className="login-email margin-bottom-2rem"
            type="text"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            value={loginCredentials.email}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                email: e.target.value,
              })
            }
            required
          />
          <label htmlFor="password"></label>
          <input
            className="login-password margin-bottom-2rem"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={loginCredentials.password}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                password: e.target.value,
              })
            }
            required
          />
          <div className="remember-me-block">
            <input
              className="remember-me-input"
              type="checkbox"
              id="remember-me"
              name="remember me"
            ></input>
            <label className="remember-me-label" htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <div className="forgot-pwd-block">
            <Link className="forgot-pwd-para" to="">
              Forgot password?
            </Link>
          </div>
          <div className="buttons-block">
            <button className="login login-test" onClick={testHandler}>
              Login using test credentials
            </button>
            <button
              className="login login-btn"
              onClick={(event) => loginForm(event)}
            >
              LOGIN
            </button>
          </div>
          <p className="login-para">
            Not a user yet?
            <Link className="login-link" to="/signup">
              Create your account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
export { Login };
