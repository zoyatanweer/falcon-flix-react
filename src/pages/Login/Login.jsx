import React from "react";
import "./Login.css";
// import loginSignup from "../../Assets/Images/loginSignup.png";
import { Link } from "react-router-dom";
// import { useTheme } from "../../Context/Theme/Theme-Context";

const Login = () => {
  //   const { theme } = useTheme();

  return (
    // <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
    <section className="login-signup-page">
      {/* <div className="login-img-section">
        <img className="img-form login-img" src={loginSignup} />
      </div> */}
      <div className="login-signup-form login-form">
        <h1 className="form-heading margin-bottom-2rem">LOGIN</h1>
        <form>
          <label for="email"></label>
          <input
            className="login-email margin-bottom-2rem"
            type="text"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
          />
          <label for="password"></label>
          <input
            className="login-password margin-bottom-2rem"
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <div className="remember-me-block">
            <input
              className="remember-me-input"
              type="checkbox"
              id="remember-me"
              name="remember me"
            ></input>
            <label className="remember-me-label" for="remember-me">
              Remember me
            </label>
          </div>
          <div className="forgot-pwd-block">
            <Link className="forgot-pwd-para" to="">
              Forgot password?
            </Link>
          </div>
          <div className="buttons-block">
            <button className="login login-test">
              Login using test credentials
            </button>
            <button className="login login-btn">LOGIN</button>
          </div>
        </form>
        <p className="login-para">
          Not a user yet?
          <Link className="login-link" to="/signup">
            Create your account
          </Link>
        </p>
      </div>
    </section>
    // </div>
  );
};
export { Login };
