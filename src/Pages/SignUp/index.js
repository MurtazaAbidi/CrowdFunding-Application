import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
    CNIC: "",
    officeAddress: "",
  };
  // const [showCNIC, setShowCNIC] = useState("");
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFromErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e);

    const { name, value } = e.target;
    // console.log (name, value[value.length-1], "length:"+value.length, value)
    if (
      name === "CNIC" &&
      value.length > 0 &&
      !(
        value[value.length - 1] >= "0" &&
        value[value.length - 1] <= "9" &&
        value.length <= 13
      )
    ) {
      console.log("Invalid: " + value[value.length - 1]);
      return 0;
    }
    if (
      name === "phonenumber" &&
      value.length > 0 &&
      !(
        value[value.length - 1] >= "0" &&
        (value[value.length - 1] <= "9") |
          (value.length === 1 && value[value.length - 1] === "+")
      )
    ) {
      console.log("Invalid: " + value[value.length - 1]);
      return 0;
    }
    setFormValues({ ...formValues, [name]: value });

    // if (name === "CNIC") {
    //   let temp = "";
    //   for (let i = 0; i < value.length; i++) {
    //     temp += value[i];
    //     if ((temp.length === 5) | (temp.length === 13)) {
    //       temp += "-";
    //     }
    //   }
    //   setShowCNIC(temp);
    //   // console.log(formValues);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFromErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(validate(formValues)).length === 0) {


      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/campaigner/signup`,
          {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            phone: formValues.phonenumber,
            cnic: formValues.CNIC,
            officeAddress: formValues.officeAddress
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            alert(response.data);
            setFormValues({});
            // console.warn (response.data)
          }
        })
        .catch(function (error) {
          console.log(error.response.data.msg);
          alert(error.response.data.msg);
          setFormValues({...formValues, email:"", password:"", confirmpassword:""})
        });
    }
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     // console.log(formValues);
  //     // alert("SignUp Done");
  //   }
  // }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Name is required!";
    }
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
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "Password doesn't Match!";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "Phone Number is required!";
    }
    if (!values.CNIC) {
      errors.CNIC = "CNIC Number is required!";
    } else if (values.CNIC.length !== 13) {
      errors.CNIC = "CNIC must be 13 numbers";
    }
    if (!values.officeAddress) {
      errors.officeAddress = "Office Address is Required!";
    }
    return errors;
  };

  return (
    // <div className = "login-div" style={{paddingTop:10, position:'absolute', top:'1rem', left:'36%'}}>
    <div className="login-signup-container">
      <div className="login-div" style={{ paddingTop: 10 }}>
        {
        // Object.keys(formErrors).length === 0 && isSubmit ? (
        //   <pre
        //     style={{ color: "white", position: "absolute", left: 10, top: 10 }}
        //   >
        //     {/* Sign Up Done */}
        //     correct Validations
        //   </pre>
        // ) : (
        //   <pre
        //     style={{ color: "white", position: "absolute", left: 10, top: 10 }}
        //   >
        //     {JSON.stringify(formValues, undefined, 2)}
        //   </pre>
        // )
        }
        <div className="login-title" style={{padding:5}}>
          Sign Up
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ overflowY: "scroll", maxHeight:370 }}>
            <div className="fields">
              <p className="fields-error">{formErrors.name}</p>
              <div
                className="text-field"
                style={{ border: formErrors.name ? "1.5px solid red" : null }}
              >
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                </svg>
                <input
                  name="name"
                  type="name"
                  className="signup-input"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>
              <p className="fields-error">{formErrors.email}</p>
              <div
                className="text-field"
                style={{ border: formErrors.email ? "1.5px solid red" : null }}
              >
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                </svg>
                <input
                  name="email"
                  type="email"
                  className="signup-input"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p className="fields-error">{formErrors.password}</p>
              <div
                className="password"
                style={{
                  border: formErrors.password ? "1.5px solid red" : null,
                }}
              >
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
                </svg>
                <input
                  name="password"
                  type="password"
                  className="signup-input"
                  placeholder="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p className="fields-error">{formErrors.confirmpassword}</p>
              <div
                className="password"
                style={{
                  border: formErrors.confirmpassword ? "1.5px solid red" : null,
                }}
              >
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
                </svg>
                <input
                  name="confirmpassword"
                  type="password"
                  className="signup-input"
                  placeholder="Confirm password"
                  value={formValues.confirmpassword}
                  onChange={handleChange}
                />
              </div>
              <p className="fields-error">{formErrors.phonenumber}</p>
              <div
                className="text-field"
                style={{
                  border: formErrors.phonenumber ? "1.5px solid red" : null,
                }}
              >
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></path>
                </svg>
                <input
                  name="phonenumber"
                  type="phone number"
                  className="signup-input"
                  placeholder="Phone Number"
                  value={formValues.phonenumber}
                  onChange={handleChange}
                />
              </div>
              <p className="fields-error">{formErrors.CNIC}</p>
              {/* <p>CNIC: {showCNIC}</p> */}
              <div
                className="text-field"
                style={{ border: formErrors.CNIC ? "1.5px solid red" : null }}
              >
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z"></path>
                </svg>
                <input
                  name="CNIC"
                  type="text"
                  className="signup-input"
                  placeholder="CNIC"
                  value={formValues.CNIC}
                  onChange={handleChange}
                />
              </div>
              <p className="fields-error">{formErrors.officeAddress}</p>
              <div
                className="text-field"
                style={{
                  border: formErrors.officeAddress ? "1.5px solid red" : null,
                }}
              >
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                </svg>
                <input
                  name="officeAddress"
                  type="text"
                  className="signup-input"
                  placeholder="Office Address"
                  value={formValues.officeAddress}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button className="signin-button" style={{ margin: "1.25rem 0", height:'3rem' }}>
            {" "}
            Sign Up
          </button>
          <div className="linkk" style={{padding:0}}>
          <Link to={"/login"}>Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
