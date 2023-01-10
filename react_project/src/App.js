import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import UserHome from './components/UserHome/UserHome';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from './components/Orders/Orders';
import React, { useEffect } from 'react';
import Address from './components/Address/Address';
import ModifyProduct from './components/ModifyProduct/ModifyProduct';
import AddProduct from './components/AddProduct/AddProduct';

function App() {
  useEffect(() => {
    document.title = "upGrad E-Shop | Top brands for Phones and Electronics"
  }, []);

  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route path='/' element={<Login />}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/signup' element={<SignUp />}>
        </Route>
        <Route path='/userhome' element={<UserHome />}>
        </Route>
        <Route path='/products/:id' element={<ProductDetail />}>
        </Route>
        <Route path='/orders' element={<Orders />}>
        </Route>
        <Route path='/addresses' element={<Address />}>
        </Route>
        <Route path='/modify/:id' element={<ModifyProduct />}>
        </Route>
        <Route path='/addproduct' element={<AddProduct />}>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
