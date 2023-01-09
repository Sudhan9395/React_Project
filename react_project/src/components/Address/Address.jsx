import NavBar from "../NavBar/NavBar";
import React, { useState } from "react";
import { Button, Select, MenuItem, InputLabel, TextField } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './Address.css'

const Address = () => {
    const param = useLocation();
    const product = param.state.product;
    const data = require('../../assets/address/addressList.json');

    const [stepCount, setStepCount] = useState(1);
    const [deliveryAddress, setDeliveryAddress] = useState('default');
    const [addresses, setAddresses] = useState(data.address);

    const OnNextClickHandler = () => {
        let step = stepCount;
        setStepCount(step+1);
    }

    const OnBackClickHandler = () => {
        let step = stepCount;
        setStepCount(step-1);
    }

    const AddressHandler = (e) => {
        setDeliveryAddress(e.target.value);
    }
    
    const OnSaveClickHandler = () => {
        addresses.push('Hello');
        console.log(addresses);
        setAddresses(addresses);
    }

    return (
        <div className="address-container">
            <NavBar IsUserPage={true} UserRole={param.state.user.role}/>
            <div className="address-select">
                <InputLabel id="sort-by">Select Address</InputLabel>
                <Select
                    labelId="sort-by"
                    id="sort-by"
                    value={deliveryAddress}
                    label="sort-by"
                    onChange={AddressHandler}
                >
                    <MenuItem value="default">--Select an address--</MenuItem>
                    {addresses.map((adr) => {
                            return(
                                <MenuItem value={adr} key={adr.type}>
                                    <b>{adr.type}</b> - {adr.doorNo},{adr.apartmentName},{adr.area}
                                </MenuItem>
                            )
                        })  
                    }
                </Select>
            </div>
            <div className="new-address-section">
                <div className="text-section">
                    <h3>-OR-</h3>
                    <h1>Add Address</h1>
                </div>
                <div className="address-input">
                    <TextField
                        label="Name"
                        required
                        fullWidth
                    />
                </div>
                <div className="address-input">
                    <TextField
                        label="Contact Number"
                        required
                        fullWidth
                    />
                </div>
                <div className="address-input">
                    <TextField
                        label="Street"
                        required
                        fullWidth
                    />
                </div>
                <div className="address-input">
                    <TextField
                        label="City"
                        required
                        fullWidth
                    />
                </div>
                <div className="address-input">
                    <TextField
                        label="State"
                        required
                        fullWidth
                    />
                </div>
                <div className="address-input">
                    <TextField
                        label="Landmark"
                        required
                        fullWidth
                    />
                </div>
                <div className="address-input">
                    <TextField
                        label="Zip Code"
                        required
                        fullWidth
                    />
                </div>
                <div className="btn-save">
                    <Button size="small" variant="contained" color="primary" onClick={OnSaveClickHandler}>
                        SAVE ADDRESS
                    </Button>
                </div>
            </div>
            <div className="btn-order">
                <div className="btn-back">
                    <Link to="/orders" state={{user: param.state.user, product: product, step: stepCount-1}}>
                        <Button size="small" variant="contained" color="action" onClick={OnBackClickHandler}>
                            BACK
                        </Button>
                    </Link>
                </div>
                <div className="btn-next">
                    <Link to="/orders" state={{user: param.state.user, product: product, step: stepCount+1}}>
                        <Button size="small" variant="contained" color="primary" onClick={OnNextClickHandler}>
                            NEXT
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Address;