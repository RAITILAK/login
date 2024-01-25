import React, { useState } from "react";
import "./signupform.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    designation: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Form submitted:", formData);
    // You can send this data to your server or perform any other actions
  };

  return (
    <div className="signup-box">
      <div className="wrapper11">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          </div>

          <div className="dropdown">
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
            >
              <option value="">Select Designation</option>
              <option value="owner">Owner</option>
              <option value="propertyManager">Property Manager</option>
            </select>
          </div>

          {/* <div className="input-box">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="Date of Birth"
            required
          />
        </div> */}

          <button type="submit">Sign Up</button>
        </form>

        <div className="sign-up">
          <p>
            Already have an account? <a href="LoginForm.jsx">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
