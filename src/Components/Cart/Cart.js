import React from 'react';
import "./Cart.css"

const Cart = () => {
  return <div><div className="container bg-white rounded-top mt-5" id="zero-pad">
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
              <div className="font-weight-normal">2 items</div>
          </div>
          <div className="d-flex flex-row px-lg-5 mx-lg-5 mobile" id="heading">
              <div className="px-lg-5 mr-lg-5" id="produc">PRODUCTS</div>
              <div className="px-lg-5 ml-lg-5" id="prc">PRICE</div>
              <div className="px-lg-5 ml-lg-1" id="quantity">QUANTITY</div>
              <div className="px-lg-5 ml-lg-3" id="total">TOTAL</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
              <div className="d-flex flex-row align-items-center">
                  <div><img src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" width="150" height="150" alt="" id="image"/></div>
                  <div className="d-flex flex-column pl-md-3 pl-1">
                      <div>
                          <h6>COTTON T-SHIRT</h6>
                      </div>
                      <div>Art.No:<span className="pl-2">091091001</span></div>
                      <div>Color:<span className="pl-3">White</span></div>
                      <div>Size:<span className="pl-4"> M</span></div>
                  </div>
              </div>
              <div className="pl-md-0 pl-1"><b>$9.99</b></div>
              <div className="pl-md-0 pl-2"> <span className="fa fa-minus-square text-secondary"></span><span className="px-md-3 px-1">2</span><span className="fa fa-plus-square text-secondary"></span> </div>
              <div className="pl-md-0 pl-1"><b>$19.98</b></div>
              <div className="close">&times;</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center pt-4 pb-3 mobile">
              <div className="d-flex flex-row align-items-center">
                  <div><img src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" width="150" height="150" alt="" id="image"/></div>
                  <div className="d-flex flex-column pl-md-3 pl-1">
                      <div>
                          <h6>WHITE T-SHIRT</h6>
                      </div>
                      <div>Art.No:<span className="pl-2">056289891</span></div>
                      <div>Color:<span className="pl-3">White</span></div>
                      <div>Size:<span className="pl-4"> XL</span></div>
                  </div>
              </div>
              <div className="pl-md-0 pl-1"><b>$20.9</b></div>
              <div className="pl-md-0 pl-2"> <span className="fa fa-minus-square text-secondary"></span><span className="px-md-3 px-1">2</span><span className="fa fa-plus-square text-secondary"></span> </div>
              <div className="pl-md-0 pl-1"><b>$41.8</b></div>
              <div className="close">&times;</div>
          </div>
      </div>
  </div>
</div>
<div className="container bg-light rounded-bottom py-4" id="zero-pad">
  <div className="row d-flex justify-content-center">
      <div className="col-lg-10 col-12">
          <div className="d-flex justify-content-between align-items-center">
              <div> <button className="btn btn-sm bg-light border border-dark">GO BACK</button> </div>
              <div className="px-md-0 px-1" id="footer-font"> <b className="pl-md-4">SUBTOTAL<span className="pl-md-4">$61.78</span></b> </div>
              <div> <button className="btn btn-sm bg-dark text-white px-lg-5 px-3">CONTINUE</button> </div>
          </div>
      </div>
  </div>
</div></div>;
};

export default Cart;
