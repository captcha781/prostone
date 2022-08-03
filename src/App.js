import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Pages/Dashboard"
import LeaderBoard from "./Pages/LeaderBoard"
import Order from "./Pages/Order"
import Sales from "./Pages/Sales"
import Products from "./Pages/Products"
import Messages from "./Pages/Messages"
import Settings from "./Pages/Settings"
import Signout from "./Pages/Signout"
import Menu from "./components/menu/Menu";



function App() {
  

  return (
    <BrowserRouter>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 h-auto md:h-screen w-full items-stretch  bg-pink-400">
        <Menu />
        <div className="col-span-1 md:col-span-4 lg:col-span-10 bg-red-400 ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/order" element={<Order />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signout" element={<Signout />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
