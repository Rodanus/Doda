import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import OrderList from "./components/OrderList";

import "./App.css";

function App() {
  const location = useLocation();
  const state = location.state;

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
