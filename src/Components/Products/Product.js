import React from 'react';
import { connect } from "react-redux";
// import {
//   addToCart,
// } from "../../../redux/Shopping/shopping-actions";

import {
  addToCart,
} from "../../redux/Shopping/shopping-actions";


const Product = ({product,addToCart}) => {
  return <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
  <div className="cardd"><img className="card-img-top" src={product.image}/>
      <div className="card-bodyy">
          <h5><b>{product.text}</b></h5>
          <div className="d-flex flex-row my-2">
              <div className="text-muted">${product.price}</div>
              <div className="ml-auto"> <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange"></span></button> <span className="px-sm-1">1 piece</span> <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange"></span></button> </div>
          </div> <button onClick={() => addToCart(product.id)}  className="btn w-100 rounded my-2">Add to cart</button>
      </div>
  </div>
</div>;
};

//export default Product;

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),

  };
};

export default connect(null, mapDispatchToProps)(Product);
