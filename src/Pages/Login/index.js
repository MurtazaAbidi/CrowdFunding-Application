import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../index.css";
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap"
  ref="stylesheet"
/>;

const Login = ({ setJWTAuthentication }) => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFromErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFromErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(validate(formValues)).length === 0) {
    // alert (process.env.REACT_APP_API_URL);
      
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/campaigner/login`,
          {
            email: formValues.email,
            password: formValues.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            withCredentials:true,
          }
        )
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            setJWTAuthentication(true);

            // console.warn (response.data)
          }
        })
        .catch(function (error) {
          console.log(error.response.data.msg);
          alert(error.response.data.msg)
        });
    }
    // if (formValues.email==='admin@gmail.com' && formValues.password==='admin123') setJWTAuthentication(true)
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     // alert("Login validation Done");
  //   }
  // }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters!";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed more than 15 characters!";
    }
    return errors;
  };

  return (
    <div className="login-signup-container">
      <div className="login-div">
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <pre
            style={{ color: "white", position: "absolute", left: 10, top: 10 }}
          >
            Correct Validations
          </pre>
        ) : (
          <pre
            style={{ color: "white", position: "absolute", left: 10, top: 10 }}
          >
            {JSON.stringify(formValues, undefined, 2)}
          </pre>
        )} */}
        <div className="login-logo"></div>
        <div className="login-title">Log In</div>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <p className="fields-error">{formErrors.email}</p>
            <div
              className="text-field"
              style={{ border: formErrors.email ? "1.5px solid red" : null }}
            >
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
              </svg>
              <input
                name="email"
                type="email"
                className="login-input"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="fields-error">{formErrors.password}</p>
            <div
              className="password"
              style={{ border: formErrors.password ? "1.5px solid red" : null }}
            >
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
              </svg>
              <input
                name="password"
                type="password"
                className="login-input"
                placeholder="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="signin-button"> Login</button>
        </form>
        <div className="linkk">
          <Link to={"/forgetpassword"}>Forgot Password?</Link>
          or
            <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
