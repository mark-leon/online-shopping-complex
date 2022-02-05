import React from 'react';
import { connect } from "react-redux";
import "./Home.css";
import Product from '../Products/Product';

const Home = ({products}) => {
    //console.log(products)
  return<div>
    <div className="filter"> <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filters<span className="fa fa-filter pl-1"></span></button>
    </div>
    <div id="mobile-filter">
        <p className="pl-sm-0 pl-2"> Home | <b>All products</b></p>
        <div className="border-bottom pb-2 ml-2">
            <h4 id="burgundy">Filters</h4>
        </div>
        <div className="py-2 border-bottom ml-3">
            <h6 className="font-weight-bold">Categories</h6>
            <div id="orange"><span className="fa fa-minus"></span></div>
            <form>
                <div className="form-group"> <input type="checkbox" id="artisan"/> <label for="artisan">Fresh Artisan Breads</label> </div>
                <div className="form-group"> <input type="checkbox" id="breakfast"/> <label for="breakfast">Breakfast Breads</label> </div>
                <div className="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">Healthy Breads</label> </div>
            </form>
        </div>
        <div className="py-2 border-bottom ml-3">
            <h6 className="font-weight-bold">Accompainments</h6>
            <div id="orange"><span className="fa fa-minus"></span></div>
            <form>
                <div className="form-group"> <input type="checkbox" id="tea"/> <label for="tea">Tea Cakes</label> </div>
                <div className="form-group"> <input type="checkbox" id="cookies"/> <label for="cookies">Cookies</label> </div>
                <div className="form-group"> <input type="checkbox" id="pastries"/> <label for="pastries">Pastries</label> </div>
                <div className="form-group"> <input type="checkbox" id="dough"/> <label for="dough">Cookie Dough</label> </div>
                <div className="form-group"> <input type="checkbox" id="choco"/> <label for="choco">Chocolates</label> </div>
            </form>
        </div>
        <div className="py-2 ml-3">
            <h6 className="font-weight-bold">Top Offers</h6>
            <div id="orange"><span className="fa fa-minus"></span></div>
            <form>
                <div className="form-group"> <input type="checkbox" id="25off"/> <label for="25">25% off</label> </div>
                <div className="form-group"> <input type="checkbox" id="5off"/> <label for="5off" id="off">5% off on shoes</label> </div>
            </form>
        </div>
    </div>
    <section id="sidebar">
        <p> Home | <b>All Products</b></p>
        <div className="border-bottom pb-2 ml-2">
            <h4 id="burgundy">Filters</h4>
        </div>
        <div className="py-2 border-bottom ml-3">
            <h6 className="font-weight-bold">Categories</h6>
            <div id="orange"><span className="fa fa-minus"></span></div>
            <form>
                <div className="form-group"> <input type="checkbox" id="artisan"/> <label for="artisan">Shoes</label> </div>
                <div className="form-group"> <input type="checkbox" id="breakfast"/> <label for="breakfast">Sunglasses</label> </div>
                <div className="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">T shirts</label> </div>
            </form>
        </div>
        <div className="py-2 border-bottom ml-3">
            <h6 className="font-weight-bold">Accompainments</h6>
            <div id="orange"><span className="fa fa-minus"></span></div>
            <form>
                <div className="form-group"> <input type="checkbox" id="tea"/> <label for="tea">Watches</label> </div>
                <div className="form-group"> <input type="checkbox" id="cookies"/> <label for="cookies">Handbag</label> </div>
                <div className="form-group"> <input type="checkbox" id="pastries"/> <label for="pastries">Perfumes</label> </div>
                <div className="form-group"> <input type="checkbox" id="dough"/> <label for="dough">Books</label> </div>
                <div className="form-group"> <input type="checkbox" id="choco"/> <label for="choco">Laptops</label> </div>
            </form>
        </div>
        <div className="py-2 ml-3">
            <h6 className="font-weight-bold">Top Offers</h6>
            <div id="orange"><span className="fa fa-minus"></span></div>
            <form>
                <div className="form-group"> <input type="checkbox" id="25off"/> <label for="25">25% off</label> </div>
                <div className="form-group"> <input type="checkbox" id="5off"/> <label for="5off" id="off">5% off on artisan breads</label> </div>
            </form>
        </div>
    </section>
   
    <section id="products">
        <div className="container">
            <div className="d-flex flex-row">
                <div className="text-muted m-2" id="res">Showing {products.length} results</div>
                <div className="ml-auto mr-lg-4">
                    <div id="sorting" className="border rounded p-1 m-1"> <span className="text-muted">Sort by</span> <select name="sort" id="sort">
                            <option value="popularity"><b>Popularity</b></option>
                            <option value="prcie"><b>Price</b></option>
                            <option value="rating"><b>Rating</b></option>
                        </select> </div>
                </div>
            </div>
            <div className="row">
            {products.map((product) => {
                return <Product key={product.id} product={product} />
            })}
            </div>
        </div>
    </section>
  </div>;
};


const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
};
  
export default connect(mapStateToProps)(Home);

