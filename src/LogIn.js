import "./LogIn.css";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ctx } from "./App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function LogIn() {
  const [isLoggedIn, setIsLoggedIn] = useContext(ctx);
  const [showError, setShowError] = useState(false);
  const history = useHistory();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const styleLink = { cursor: "pointer" };
  const styles = { width: "100%" };
  const testPhone = "9876543210";
  const testPassword = "Mailtool@123";

  return (
    <div className="lrPage">
      <h1 className="lrHeading">Please login to Donate.</h1>
      <div className="login-content">
        <h2 className="lrHeading-2">All fields are mandatory to be filled.</h2>
        <TextField
          style={styles}
          id="outlined-basic"
          type="number"
          value={phone}
          label="Phone Number"
          variant="outlined"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />
        <TextField
          style={styles}
          id="outlined-basic"
          type="password"
          value={password}
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            phone === testPhone && password === testPassword
              ? setIsLoggedIn(true)
              : setShowError(true);
          }}
        >
          LOGIN
        </Button>
        {isLoggedIn ? history.push("/") : ""}
        {showError ? <p>Invalid Credentials!!!</p> : ""}
        <p className="lrLastLine">
          Don't have an account?{" "}
          <span
            className="lr-switch-words"
            style={styleLink}
            onClick={() => history.push("/register")}
          >
            Register
          </span>{" "}
          now.
        </p>
      </div>
    </div>
  );
}

// export function LogIn() {
//   const [isLoggedIn, setIsLoggedIn] = useContext(ctx);
//   const history = useHistory();
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const styleFields = { height: "23px", width: "84%", padding: "16.5px 14px", border: "1px solid gray", borderRadius: "5px", font: "inherit" };
//   const styleButton = { width: "90%", height: "30px", background: "#1976d2", color: "white", font: "inherit", border: "none", borderRadius: "5px", cursor: "pointer" };
//   const styleLink = { cursor: "pointer" };
//   const styleErrors = { fontWeight: "bold", color: "red", marginTop: "0px" };
//   const [formErrors, setFormErrors] = useState({});
//   const [logInError, setLogInError] = useState("");

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const output = validate(phone,password);
//   //   if (Object.keys(output).length) {
//   //     setFormErrors(output);
//   //     setLogInError("");
//   //   }
//   //   else{
//   //     setFormErrors({});
//   //     const enteredData = {
//   //       phoneNo: phone,
//   //       password: password
//   //     }
//   //     fetch(`${API}login`, {
//   //       method: "POST",
//   //       headers: {"Content-Type": "application/JSON"},
//   //       body: JSON.stringify(enteredData)
//   //     })
//   //     .then((res) => res.json())
//   //     .then((res) => {
//   //       if (res.data === "Invalid Credentials!") {
//   //         setLogInError("Invalid Credentials!");
//   //       }
//   //       else {
//   //         setShow(!show);
//   //         history.push("/");
//   //       }
//   //     })
//   //   }
//   // }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setFormErrors(validate(phone, password));
//   };

//   const validate = (phone, password) => {
//     const errors = {};
//     if (!phone) {
//       errors.phone = "Phone number is required!";
//     }
//     if (!password) {
//       errors.password = "Password is required!";
//     }
//     return errors;
//   };

//   return (
//     <div className="lrPage">
//       <h1 className="lrHeading">Please login to Donate.</h1>
//       <form className="login-content" onSubmit={handleSubmit}>
//         <h3 className="lrHeading-2">All fields are mandatory to be filled.</h3>
//         <label>Phone Number</label><br />
//         <input
//           type="number"
//           style={styleFields}
//           placeholder="Phone Number"
//           pattern="[0-9]{10}"
//           required
//           value={phone}
//           onChange={(event) => setPhone(event.target.value)} />
//         <p style={styleErrors}>{formErrors?.phone}</p>
//         <label>Password</label><br />
//         <input
//           type="password"
//           value={password}
//           placeholder="Password"
//           style={styleFields}
//           onChange={(event) => setPassword(event.target.value)} />
//         <p style={styleErrors}>{formErrors?.password}</p>
//         <p style={styleErrors}>{logInError}</p>
//         <button
//           style={styleButton}
//         >LOGIN</button>
//         <p className="lrLastLine">Don't have an account? <span className="lr-switch-words" style={styleLink} onClick={() => history.push("/register")}>Register</span> now.</p>
//       </form>
//     </div>
//   );
// }
