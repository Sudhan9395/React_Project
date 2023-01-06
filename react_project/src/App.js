import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import UserHome from './components/UserHome/UserHome';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      </Routes>
    </Router>
    
  );
}

export default App;
