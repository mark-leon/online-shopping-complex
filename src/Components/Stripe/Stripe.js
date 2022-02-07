import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Stripe.css";
import { connect } from "react-redux";
toast.configure();

const Stripe = ({cart}) => {
    console.log(cart)
    const [product] = React.useState({
        name: "Tesla Roadster",
        price: 64998.67,
        description: "Cool car"
      });
    
      async function handleToken(token, addresses) {
        const response = await axios.post(
          "/checkout",
          { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }
    
      return (
        <div className="containers">
          <div className="productimage">
            <h1>{product.name}</h1>
            <h3>On Sale · ${product.price}</h3>
          </div>
          <StripeCheckout
            stripeKey="pk_test_51KQCoWBW0vi5VLWliCckqu2wXavroh4VLshlw4lcfg51ya5CFc2UPbBtlQP6aPmjOgi2S08nrrYHbpXf9cFo17CJ00Qtdai0pa"
    
            token={handleToken}
            amount={product.price * 100}
            name="Tesla Roadster"
            billingAddress
            shippingAddress
          />
        </div>
      );
    }


const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Stripe);
// export default Stripe;
