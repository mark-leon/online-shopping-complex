import React, {useState} from 'react';
import { connect } from "react-redux";
import {
    adjustItemQty,
    removeFromCart,
} from "../../redux/Shopping/shopping-actions";


const CartItem = ({item,adjustItemQty,removeFromCart}) => {
    // const [input, setInput] = useState(item.qty);

    // const onChangeHandler = (e) => {
    //   setInput(e.target.value);
    //   adjustQty(item.id, e.target.value);
    // };    

  return <div className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
  <div className="d-flex flex-row align-items-center">
      <div><img src={item.image} width="150" height="150" alt="" id="image"/></div>
      <div className="d-flex flex-column pl-md-3 pl-1">
          <div>
              <h6>{item.text}</h6>
          </div>
          <div>Art.No:<span className="pl-2">091091001</span></div>
          <div>Color:<span className="pl-3">White</span></div>
          <div>Size:<span className="pl-4"> M</span></div>
      </div>
  </div>
  <div className="pl-md-0 pl-1"><b>${item.price}</b></div>
  <div className="pl-md-0 pl-2"> <span className="fa fa-minus-square text-secondary"></span><span className="px-md-3 px-1">2</span><span className="fa fa-plus-square text-secondary"></span> </div>
  <div className="pl-md-0 pl-1"><b>$19.98</b></div>
  <div className="close" onClick={() => removeFromCart(item.id)}>&times;</div> 
</div>;
};




const mapDispatchToProps = (dispatch) => {
    return {
    //   adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
      removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};
  
export default connect(null, mapDispatchToProps)(CartItem);

