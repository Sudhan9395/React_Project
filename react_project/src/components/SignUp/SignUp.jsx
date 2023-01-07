import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { pink } from "@mui/material/colors";
import { TextField } from '@mui/material';
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './SignUp.css';
import React from 'react';

const SignUp = () => {
    return(
        <div className="signup-container">
            <NavBar UserPage={false}/>
            <form className="signup-form">
            <div className="signup-icon">
                    <AccountCircleIcon 
                        fontSize="large"
                        sx={{ color: pink[500] }}
                    />
                </div>
                <div className="signup-title">
                    <span>Sign Up</span>
                </div>
                <div className="login-input">
                    <TextField
                        label="First Name"
                        required
                        fullWidth
                    />
                </div>
                <div className="login-input">
                    <TextField
                        label="Last Name"
                        required
                        fullWidth
                    />
                </div>
                <div className="login-input">
                    <TextField
                        label="Email Address"
                        required
                        fullWidth
                    />
                </div>
                <div className="login-input">
                    <TextField
                        label="Password"
                        type="password"
                        required
                        fullWidth
                    />
                </div>
                <div className="login-input">
                    <TextField
                        label="Confirm Password"
                        type="password"
                        required
                        fullWidth
                    />
                </div>
                <div className="login-input">
                    <TextField
                        label="Contact Number"
                        required
                        fullWidth
                    />
                </div>
                <div className="signup-btn">
                    <input type="submit" className="btn-submit" value="SIGN UP" onClick={()=>{alert('User Added!')}}/>
                    <span className="login-link"><Link to='/login'>Already have an account? Sign In</Link></span>
                </div>
                <div className="copyright">
                    <span className="copyright-message">Copyright <span>&copy;</span><a href='https://www.upgrad.com/'>Upgrad</a> 2023</span>
                </div>
            </form>
        </div>
    );
}

export default SignUp;