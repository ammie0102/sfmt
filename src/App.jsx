import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Address from "./pages/Address";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import Foods from "./pages/Foods";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/address" element={<Address />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/food" element={<Foods />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/records" element={<div>Records</div>} />
          {/* <Route path="/delivery" element={<div>Delivery</div>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
