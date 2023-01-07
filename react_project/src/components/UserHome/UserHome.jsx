import NavBar from "../NavBar/NavBar";
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardActionArea, CardActions, CardMedia, Typography, Button, ToggleButton, ToggleButtonGroup, Select, MenuItem, InputLabel  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import React, { useState } from "react";
import './UserHome.css';

const UserHome = () => {
    const param = useLocation();
    const data = require('../../assets/products/product-list.json');
    const allProducts = data.products;

    const [toggleMenu, setToggleMenu] = useState('all');
    const [sortBy, setSortBy] = useState('default');
    const [products, setProducts] = useState(allProducts);

    const SortByHandler = (e) => {
        setSortBy(e.target.value);
        SortProduct(e.target.value);
    }

    const SortProduct = (sort) => {
        if(sort === 'lowtohigh') {
            setProducts(products.sort((a, b) => (a.Price > b.Price) ? 1 : -1));
        }
        else if(sort === 'hightolow') {
            setProducts(products.sort((a, b) => (a.Price < b.Price) ? 1 : -1));
        }
        else {
            setProducts(allProducts);
        }
    }

    const ToggleBarHandler = (e) => {
        let menu = e.target.value;
        setToggleMenu(menu);
        FilterProductByCategory(menu);
    }

    const FilterProductByCategory = category => {
        if(category !== 'all') {
            console.log(category);
            setProducts(allProducts.filter((product) => product.Category === category));
        }
        else {
            setProducts(allProducts);
        }
    }

    return(
        <div className="user-home-container">
            <NavBar IsUserPage={true} UserRole={param.state.user.role} />
            <div className="toggle-menu">
                <ToggleButtonGroup
                    color="primary"
                    value={toggleMenu}
                    exclusive
                    aria-label="Platform"
                    onChange={ToggleBarHandler}
                >
                    <ToggleButton value="all">ALL</ToggleButton>
                    <ToggleButton value="apparel">APPAREL</ToggleButton>
                    <ToggleButton value="electronics">ELECTRONICS</ToggleButton>
                    <ToggleButton value="personalcare">PERSONAL CARE</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="sortby-section">
                <InputLabel id="sort-by">Sort By</InputLabel>
                <Select
                    labelId="sort-by"
                    id="sort-by"
                    value={sortBy}
                    label="sort-by"
                    onChange={SortByHandler}
                >
                    <MenuItem value="default">--Select an option--</MenuItem>
                    <MenuItem value="lowtohigh">Price low to high</MenuItem>
                    <MenuItem value="hightolow">Price high to low</MenuItem>
                </Select>
            </div>
            <div className="product-container">
                {products.map((product) => {
                    return (
                        <div className="product-card" key={product.Id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.ImagePath}
                                    alt={product.Name}
                                    />
                                    <CardContent>
                                    <div className="product-details">
                                        <div className="product-name">
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product.Name}
                                            </Typography>
                                        </div>
                                        <div className="product-price">
                                            <Typography gutterBottom variant="h5" component="div">
                                                &#8377; {product.Price}
                                            </Typography>
                                        </div>
                                    </div>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.Description}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <div className="card-section">
                                    <CardActions>
                                        <Link to={'/products/'+product.Id} state={{user: param.state, product: product}}>
                                            <Button size="small" variant="contained" color="primary">
                                                Buy
                                            </Button>
                                        </Link>
                                    </CardActions>
                                    {param.state.user.role === "Admin" &&
                                        <div className="icon-section">
                                            <div className="edit-icon">
                                                <EditIcon color="action" />
                                            </div>
                                            <div className="delete-icon">
                                                <DeleteRoundedIcon color="action" />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </Card>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
}

export default UserHome;