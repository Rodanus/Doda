import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import OrderList from "./components/OrderList";
import { addProducts } from "./store/products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Nav from "./components/Nav";

let firstRender = false;
function App() {
  const location = useLocation();
  const state = location.state;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstRender) {
      fetch("https://fakestoreapi.com/products/")
        .then(res => res.json())
        .then(res => {
          dispatch(addProducts(res));
          firstRender = true;
        });
    }
  });
  return (
    <div className="App">
      <Nav />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="order/order-list" element={<OrderList />} /> */}
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="shop/order-list" element={<OrderList />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
