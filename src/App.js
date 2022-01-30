import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Emptycart from "./Components/Empty cart/Emptycart";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import Productdetails from "./Components/Productdetails/Productdetails";
import Signup from "./Components/Sign up/Signup";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Productdetails/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="login" element={<Login/>} />  
        <Route path="cart" element={<Cart/>} />
        <Route path="empty" element={<Emptycart/>} /> 
        <Route path="payment" element={<Payment/>} />  
      </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
