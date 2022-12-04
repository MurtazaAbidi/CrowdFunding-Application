import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const initialValues = { email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFromErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const.log (name, value)
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFromErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues)
    if (Object.keys(validate(formValues)).length === 0) {
      axios
        .post(
          // body: JSON.stringify({
          `http://localhost:3300/api/reset-password`,
          {
            email: formValues.email,
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
            alert(response.data)
            // console.warn (response.data)
          }
        })
        .catch(function (error) {
          console.log(error.response.data.msg);
          alert(error.response.data.msg)
        });
    }
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     // console.log(formValues);
  //     alert('forget Password Done')
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

    return errors;
  };

  return (
    <div className="login-signup-container">
      <div className="login-div" style={{ height: 388 }}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <pre
            style={{ color: "white", position: "absolute", left: 10, top: 10 }}
          >
            Correct Format For Email
          </pre>
        ) : (
          <pre
            style={{ color: "white", position: "absolute", left: 10, top: 10 }}
          >
            {JSON.stringify(formValues, undefined, 2)}
          </pre>
        )}
        <div className="login-title" style={{ padding: 24 }}>
          Reset Password
        </div>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <p className="fields-error">{formErrors.email}</p>
            <div className="text-field" style={{border:formErrors.email?'1.5px solid red':null}}>
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
          </div>
          <button className="signin-button"> Submit</button>
        </form>
        <div className="linkk">
          <Link to={"/"}>Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
