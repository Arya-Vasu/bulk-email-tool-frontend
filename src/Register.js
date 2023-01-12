import "./LogIn.css";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ctx } from "./App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Register() {
  const [isLoggedIn, setIsLoggedIn] = useContext(ctx);
  const history = useHistory();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const styleLink = { cursor: "pointer" };
  const styles = { width: "100%" };

  return (
    <div className="lrPage">
      <h1 className="lrHeading">Please login to Donate.</h1>
      <div className="registration-content">
        <h2 className="lrHeading-2">All fields are mandatory to be filled.</h2>
        <TextField
          style={styles}
          id="outlined-basic"
          value={name}
          label="Full Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
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
          type="email"
          value={email}
          label="Email ID"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <TextField
          style={styles}
          id="outlined-basic"
          type="password"
          value={password}
          label="Enter Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <TextField
          style={styles}
          id="outlined-basic"
          value={rePassword}
          label="Re-enter Password"
          variant="outlined"
          onChange={(e) => setRePassword(e.target.value)}
          required
        />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            history.push("/");
            setIsLoggedIn(true);
          }}
        >
          LOGIN
        </Button>
        <p className="lrLastLine">
          Already Registered?{" "}
          <span
            className="lr-switch-words"
            style={styleLink}
            onClick={() => history.push("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
