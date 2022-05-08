import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../assets/css/RegisterHome.css";
import useTitle from "../hooks/useTitle";
import { ReactComponent as HomeRegisterimage } from "../assets/images/home_register.svg";
import Navbar from "../components/Navbar";

const RegisterHome = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    toast.success("your form hass been submitted!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const notify = () => {};

  useTitle("Gharbhada | Register your home");
  return (
    <>
      <Navbar />
      <div className="register-home-container">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="shortDetail-container">
          <HomeRegisterimage width={"100%"} height={300} />
        </div>
        <div className="form-register">
          <p className="title">
            Register your home with us. We shall contact you very soon.
          </p>
          <form onSubmit={handleSubmit} className="register-form">
            <input
              type="text"
              name="homeName"
              placeholder="Property/Home Name*"
              value={inputs.homeName || ""}
              onChange={handleChange}
              autoComplete={false}
              autoFocus={true}
            />
            <input
              type="text"
              name="address"
              placeholder="Property address*"
              value={inputs.address || ""}
              onChange={handleChange}
              autoComplete={false}
            />
            <input
              type="text"
              name="fullname"
              placeholder="Your Full Name*"
              value={inputs.fullname || ""}
              onChange={handleChange}
              autoComplete={false}
            />
            <input
              type="text"
              name="contactNo"
              placeholder="Contact Number"
              value={inputs.contactNo || ""}
              onChange={handleChange}
              autoComplete={false}
            />
            <input
              type="text"
              name="emailId"
              placeholder="Email address*"
              value={inputs.emailId || ""}
              onChange={handleChange}
              autoComplete={false}
              autoCorrect={false}
            />
            {/* 
        <ReCAPTCHA
          sitekey="6LcnY7sfAAAAAIdzRsL1Cs5qUR-KStv2YlMqZ9Qn"
          onChange={onChange}
        /> */}

            <div>
              <input className="register-btn" type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterHome;
