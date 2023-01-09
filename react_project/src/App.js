import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import UserHome from './components/UserHome/UserHome';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from './components/Orders/Orders';
import React from 'react';
import Address from './components/Address/Address';

function App() {
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
      </Routes>
    </Router>
    
  );
}

export default App;
