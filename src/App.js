import React,{useState} from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/checkout";
import Shop from "./Components/Shop/Shop";
import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import Home from './Components/Home/Home'
import Hotelt1 from "./Components/Hotelt/Hotelt1";
import NotFound from "./Components/NotFound/notfound";
import Submitted from "./Components/Admin/Submitted";
import Nav from './Components/NavBar/home2Nav';
import Footer2 from './Components/Footer/Footer2';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("logged_in")))
const [items, setitems] = useState(JSON.parse(localStorage.getItem("items")))
  const handleChangeitem=()=>{
    setitems(JSON.parse(localStorage.getItem('items')))
  }

  const handleChangeRole = () => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("logged_in")))
  };
  const deleteHoteld = (index1) => {
    let deleted = JSON.parse(localStorage.getItem("items"));
    deleted.splice(index1, 1);
    localStorage.setItem("items", JSON.stringify(deleted));
    setitems(JSON.parse(localStorage.getItem("items")))
  };
  return (
    <>
            <Nav />
            <Switch>
              <Route path="/orders" element={<Submitted />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/account"
                element={<Login handleChangeRole={handleChangeRole} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/Hotelt" element={<Hotelt1 />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="*" element={<NotFound />} />
            </Switch>
            <Footer2/>
          </>
  )
}

export default App