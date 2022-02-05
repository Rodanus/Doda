import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import OrderList from "./components/OrderList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="order-list" element={<OrderList />} />
      </Routes>
    </div>
  );
}

export default App;
