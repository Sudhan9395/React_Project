import NavBar from "../NavBar/NavBar";
import { TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { pink } from "@mui/material/colors";
import './Login.css';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    
    const userEmailHandler = (e) => {
        setUserEmail(e.target.value);
    }

    const userPasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const userValidation = (e) => {
        e.preventDefault();
        var data = require('../../assets/users/user-list.json');
        data.users.forEach( user => {
            if(user.email === userEmail && user.password === password) {
                navigate('/userhome', {
                    state: {user}
                });
            }
        });
    }
    

    return(
        <div className="login-container">
            <NavBar UserPage={false}/>
            <form className="login-form">
                <div className="signin-icon">
                    <AccountCircleIcon 
                        fontSize="large"
                        sx={{ color: pink[500] }}
                    />
                </div>
                <div className="signin-title">
                    <span>Sign In</span>
                </div>
                <div className="login-input">
                    <TextField
                        label="Email Address"
                        value={userEmail}
                        onChange={userEmailHandler}
                        required
                        fullWidth
                    />
                </div>
                <div className="login-input">
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={userPasswordHandler}
                        required
                        fullWidth
                    />
                </div>
                <div className="login-btn">
                    <input type="submit" className="btn-submit" value="SIGN IN" onClick={userValidation}/>
                    <span className="signup-link"><Link to='/signup'>Don't have an account? Sign Up</Link></span>
                </div>
                <div className="copyright">
                    <span className="copyright-message">Copyright <span>&copy;</span><a href='https://www.upgrad.com/'>Upgrad</a> 2023</span>
                </div>
            </form>
        </div>
    );
}

export default Login;