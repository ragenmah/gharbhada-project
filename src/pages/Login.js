import React, { useState } from "react";

import { FaEyeSlash, FaEye } from "react-icons/fa";

import "../assets/css/RegisterHome.css";
import useTitle from "../hooks/useTitle";
import { ReactComponent as Loginimage } from "../assets/images/login.svg";
import Navbar from "../components/Navbar";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    window.location.href = "/admin-dashboard";
  };
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const notify = () => {};
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  useTitle("Gharbhada | Register your home");
  return (
    <>
      <Navbar />
      <div className="register-home-container">
        <div className="shortDetail-container">
          <Loginimage width={"100%"} height={300} />
        </div>
        <div className="form-register" style={{ width: "30%" }}>
          <p className="title" style={{ width: "100%", fontSize: 24 }}>
            Login
          </p>
          <p>Enter your email and password to log in</p>
          <form onSubmit={handleSubmit} className="register-form">
            <input
              type="text"
              name="emailId"
              placeholder="Email"
              value={inputs.emailId || ""}
              onChange={handleChange}
              autoComplete={false}
              autoFocus={true}
            />
            <div className="password-field">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={inputs.password || ""}
                onChange={handleChange}
                autoComplete={false}
              />
              <button onClick={togglePassword} style={{ border: 0 }}>
                {passwordShown ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <a>Forget password?</a>
            </div>
            <div>
              <input className="register-btn" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
