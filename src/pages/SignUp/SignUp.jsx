import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "./SignUp.css";

const Signup = () => {
  const { signupHandler } = useAuth();
  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const signUpForm = (event) => {
    event.preventDefault();
    signupHandler(newUser);
  };
  return (
    <section className="login-signup-page">
      <div className="login-signup-form signup-form">
        <h1 className="form-heading margin-bottom-2rem">SIGN UP</h1>
        <form action="" onSubmit={signUpForm} className="signup">
          <label for="fname"></label>
          <input
            className="signup-fname"
            type="text"
            id="fname"
            name="fname"
            placeholder="First name"
            value={newUser.fname}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                fname: e.target.value,
              })
            }
            required
          />

          <label for="lname"></label>
          <input
            className="signup-lname"
            type="text"
            id="fname"
            name="lname"
            placeholder="Last name"
            value={newUser.lname}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                lname: e.target.value,
              })
            }
            required
          />

          <label for="email"></label>
          <input
            className="signup-email"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                email: e.target.value,
              })
            }
            required
          />

          <label for="password"></label>
          <input
            className="signup-password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({
                ...newUser,
                password: e.target.value,
              })
            }
            required
          />

          <div>
            <button className="signup-btn">Sign Up</button>
          </div>
          <p className="login-para">
            Already a user?
            <Link className="login-link" to="/login">
              Log into your account{" "}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export { Signup };
