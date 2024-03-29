import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password</a>
        </div>
        <button type="submit">Login</button>
        <div className="sign-up">
          <p>
            Don't have an account?
            <a href="Signup.jsx">Sign Up</a>
            {/* <Link to="/Signup.jsx">Signup</Link> */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
