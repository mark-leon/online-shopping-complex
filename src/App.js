import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Emptycart from "./Components/Empty cart/Emptycart";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Payment from "./Components/Payment/Payment";
import Productdetails from "./Components/Productdetails/Productdetails";
import Product from "./Components/Products/Product";
import Signup from "./Components/Sign up/Signup";
import Stripe from "./Components/Stripe/Stripe";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="details" element={<Productdetails/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="login" element={<Login/>} />  
        <Route path="cart" element={<Cart/>} />
        <Route path="empty" element={<Emptycart/>} /> 
        <Route path="payment" element={<Payment/>} />
        <Route path="stripe" element={<Stripe/>} />

        {/* <Route path="/product/*" element={<Home/>} /> */}
          {/* <Route path=":id" element={<Productdetails />} />  */}
      </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
