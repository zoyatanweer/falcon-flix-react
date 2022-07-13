import React from "react";
import "./SignUp.css";
// import loginSignup from "../../Assets/Images/loginSignup.png";
// import { VisibilityEyeIcon } from "../../Assets/Svg/allsvg";
import { Link } from "react-router-dom";
// import { useTheme } from "../../Context/Theme/Theme-Context";

const Signup = () => {
  //   const { theme } = useTheme();

  return (
    // <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
    <section className="login-signup-page">
      <div className="login-signup-form signup-form">
        <h1 className="form-heading margin-bottom-2rem">SIGN UP</h1>
        <form>
          <label for="fname"></label>
          <input
            className="signup-fname"
            type="text"
            id="fname"
            name="fname"
            placeholder="First name"
          />

          <label for="lname"></label>
          <input
            className="signup-lname"
            type="text"
            id="fname"
            name="lname"
            placeholder="Last name"
          />

          <label for="email"></label>
          <input
            className="signup-email"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />

          <label for="password"></label>
          <input
            className="signup-password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />

          {/* {<VisibilityEyeIcon className="visibility-eye" />} */}

          <label for="password"></label>
          <input
            className="signup-password"
            type="password"
            id="confirm-password"
            name="password"
            placeholder="Confirm Password"
          />
          <button className="signup-btn">Sign Up</button>
          <p className="login-para">
            Already a user?
            <Link className="login-link" to="/login">
              Log into your account{" "}
            </Link>
          </p>
        </form>
      </div>
      {/* <div className="signup-img-section">
        <img className="img-form signup-img" src={loginSignup} />
      </div> */}
    </section>
    // </div>
  );
};

export { Signup };
