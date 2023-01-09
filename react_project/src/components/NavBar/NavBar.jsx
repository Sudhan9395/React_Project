import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useLocation } from "react-router-dom";
import './NavBar.css';
import React from 'react';

const NavBar = (props) => {
    const location = useLocation();

    const OnSearchHandler = (e) => {
        console.log(e.target.value);
    }

    const OnLogoClicked = () => {
        window.location = 'http://localhost:3000/';
    }

    return (
        <div className='navbar'>
            <div className='logo' onClick={OnLogoClicked}>
                <ShoppingCartIcon fontSize='small' />
                <div className='logo-text'>upGrad E-Shop</div>
            </div>
            {
                props.IsUserPage &&
                <div className='search-items'>
                    <input type="text" className='searchbar' placeholder='Search...' onChange={OnSearchHandler} /> 
                </div>
            }
            
            <div className='menu-items'>
                <ul className='menu-items-list'>
                    {
                        !props.IsUserPage &&
                        <li className='menu-item'>
                            <Link to='/login'><button className='button-primary'>Login</button></Link>
                        </li>
                    }
                    {
                        !props.IsUserPage &&
                        <li className='menu-item'>
                            <Link to='/signup'><button className='button-primary'>Sign Up</button></Link>
                        </li> 
                    }
                    {
                        props.IsUserPage &&
                        <li className='menu-item'>
                            <Link to='/userhome' state={location.state}><button className='button-primary'>Home</button></Link>
                        </li>
                    }
                    {
                        props.UserRole === "Admin" &&
                        <li className='menu-item'>
                            <Link to='/userhome' state={location.state}><button className='button-primary'>Add Product</button></Link>
                        </li>
                    }
                    {
                        props.IsUserPage &&
                        <li className='menu-item'>
                            <Link to='/login'><button className='button-logout'>LOGOUT</button></Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
}

export default NavBar;