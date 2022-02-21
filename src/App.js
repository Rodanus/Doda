import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import OrderList from "./components/OrderList";
import { addFoodMenu } from "./store/foodMenu";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./App.css";

let firstRender = false;
function App() {
  const location = useLocation();
  const state = location.state;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstRender) {
      fetch("https://d-restaurant-38c89-default-rtdb.firebaseio.com/.json")
        .then(res => res.json())
        .then(res => {
          dispatch(addFoodMenu(res.foodMenu));
          firstRender = true;
        });
    }
  });
  return (
    <div className="App">
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="order/order-list" element={<OrderList />} />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="order/order-list" element={<OrderList />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
