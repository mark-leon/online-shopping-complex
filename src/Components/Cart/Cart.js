import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css";
import { connect } from "react-redux";
import CartItem from '../CartItem/CartItem';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Cart = ({cart}) => { 
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);


    let cartItems = [];
    cart.forEach((item) => {
        cartItems += item.text+" ";
    }); 

    async function handleToken(token, addresses) {
        const response = await axios.post(
          "/checkout",
          { token,totalPrice,cartItems}
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }
    

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return <div> <div className="container bg-white rounded-top mt-5" id="zero-pad">
  <div className="row d-flex justify-content-center">
      <div className="col-lg-10 col-12 pt-3">
          <div className="d-flex">
              <div className="pt-1">
                  <h4>My T-shirt</h4>
              </div>
              <div className="ml-auto p-2"><a href="#" className="text-dark text-decoration-none" id="mobile-font">LOGIN</a></div>
              <div className="p-2"><a href="#" className="text-dark text-decoration-none a" id="mobile-font">HELP</a></div>
          </div>
          <div className="d-flex flex-column pt-4">
              <div>
                  <h5 className="text-uppercase font-weight-normal">shopping bag</h5>
              </div>
              <div className="font-weight-normal">{cart.length} items</div>
          </div>
          <div className="d-flex flex-row px-lg-5 mx-lg-5 mobile" id="heading">
              <div className="px-lg-5 mr-lg-5" id="produc">PRODUCTS</div>
              <div className="px-lg-5 ml-lg-5" id="prc">PRICE</div>
              <div className="px-lg-5 ml-lg-1" id="quantity">QUANTITY</div>
              <div className="px-lg-5 ml-lg-3" id="total">TOTAL</div>
          </div>
          {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
  </div>
</div>
<div className="container bg-light rounded-bottom py-4" id="zero-pad">
  <div className="row d-flex justify-content-center">
      <div className="col-lg-10 col-12">
          <div className="d-flex justify-content-between align-items-center">
              <div> <Link to="/"><button className="btn btn-sm bg-light border border-dark">GO BACK</button></Link> </div>
              <div className="px-md-0 px-1" id="footer-font"> <b className="pl-md-4">SUBTOTAL<span className="pl-md-4">${totalPrice}</span></b> </div>
              <StripeCheckout
                 stripeKey="pk_test_51KQCoWBW0vi5VLWliCckqu2wXavroh4VLshlw4lcfg51ya5CFc2UPbBtlQP6aPmjOgi2S08nrrYHbpXf9cFo17CJ00Qtdai0pa"
                 token={handleToken}
                 amount={totalPrice * 100}
                 name={cartItems}
                 billingAddress
                 shippingAddress
              />
              {/* <div><Link to="/payment"> <button className="btn btn-sm bg-dark text-white px-lg-5 px-3">CONTINUE</button></Link> </div> */}
          </div>
      </div>
  </div>
</div></div>;
};




const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
export default connect(mapStateToProps)(Cart);



