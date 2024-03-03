import React, { useContext, useState } from "react";
import Auth from "./Auth.js";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, ArrowBack } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import { Usercontext } from "../../UserContext.js";

const Loginform = () => {
  const url = "http://localhost:5000/auth/signin"

  const [showPassword, setShowPassword] = useState(false);
  const {isSignedIn, setIsSignedIn} = useContext(Usercontext)

  const navigate = useNavigate()

  const initialState = {
    name: "",
    password: ""
  }
  
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(url, formValues, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setIsSignedIn(true);
      navigate("/")
    } catch (error) {
      console.log(error)
    }
    console.log(isSignedIn)
  }
  return (
    <div>
      <Link className="arrowIcon" to="/">
        <ArrowBack/>
      </Link>
      <Auth />
      <div
        className="card mx-auto p-4 align-items-center"
        style={{ width: "30rem" }}
      >
        <div className="form-header mb-2 px-0 pt-2">Sign in</div>
        <div className="underline mb-4"></div>

        {/* Form */}
        <div className="p-3" style={{ width: "100%" }}>
          {/* Name */}
          <TextField
            required
            className="my-2"
            fullWidth
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            onChange={handleChange}
            />

          {/* Password */}
          <TextField
            required
            className="my-2"
            fullWidth
            id="outlined-basic"
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            onChange={handleChange}
          />

        {/* Submit button */}
        </div>
        <Button variant="contained" onClick={handleSubmit}>Sign in</Button>

        <hr style={{ borderBottom: "2px solid #858585", width: "90%" }}></hr>

        <Link to="/signup">
          <Button variant="outlined" className="btn-2">
            Create New Account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Loginform;
