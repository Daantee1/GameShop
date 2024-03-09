import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CartPage from "./components/CartPage"
import CartPageTwo from "./components/CartPageTwo";
import CartPageThree from "./components/CartPageThree";
import Action from "./components/genere/action";
import Adventure from "./components/genere/adventure";
import Discount from "./components/genere/discount";
import Fps from "./components/genere/fps";
import Rpg from "./components/genere/rpg";
import Strategy from "./components/genere/strategy";
import Simulation from "./components/genere/simulation";
import AboutUs from "./components/AboutUs";
import OrdersPage from "./components/OrdersPage";




function App() {
  return (
    <div className="font-body">
      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/cartPageTwo" element={<CartPageTwo />} />
          <Route path="/cartPageThree" element={<CartPageThree />} />
          <Route path="/genere/action" element = {<Action />} />
          <Route path="/genere/adventure" element = {<Adventure />} />
          <Route path="/genere/discount" element = {<Discount />} />
          <Route path="/genere/fps" element = {<Fps />} />
          <Route path="/genere/rpg" element = {<Rpg />} />
          <Route path="/genere/strategy" element = {<Strategy />} />
          <Route path="/genere/simulation" element = {<Simulation />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ordersPage" element={<OrdersPage />} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
