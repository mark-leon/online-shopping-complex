import React from 'react';
import "./Home.css";
const Home = () => {
  return<div>
      <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom"> <a className="navbar-brand ml-2 font-weight-bold" href="#"><span id="burgundy">The</span><span id="orange">Bakeshop</span></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarColor">
            <ul className="navbar-nav">
                <li className="nav-item rounded bg-light search-nav-item"><input type="text" id="search" className="bg-light" placeholder="Search bread, cakes, desserts"/><span className="fa fa-search text-muted"></span></li>
                <li className="nav-item"><a className="nav-link" href="#"><span className="fa fa-user-o"></span><span className="text">Login</span></a> </li>
                <li className="nav-item "><a className="nav-link" href="#"><span className="fa fa-shopping-cart"></span><span className="text">Cart</span></a> </li>
            </ul>
        </div>
    </nav>
    <div className="filter"> <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filters<span className="fa fa-filter pl-1"></span></button>
    </div>
    <div id="mobile-filter">
        <p className="pl-sm-0 pl-2"> Home | <b>All Breads</b></p>
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
                <div className="form-group"> <input type="checkbox" id="5off"/> <label for="5off" id="off">5% off on artisan breads</label> </div>
            </form>
        </div>
    </div>
    <section id="sidebar">
        <p> Home | <b>All Breads</b></p>
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
                <div className="form-group"> <input type="checkbox" id="5off"/> <label for="5off" id="off">5% off on artisan breads</label> </div>
            </form>
        </div>
    </section>
   
    <section id="products">
        <div className="container">
            <div className="d-flex flex-row">
                <div className="text-muted m-2" id="res">Showing 44 results</div>
                <div className="ml-auto mr-lg-4">
                    <div id="sorting" className="border rounded p-1 m-1"> <span className="text-muted">Sort by</span> <select name="sort" id="sort">
                            <option value="popularity"><b>Popularity</b></option>
                            <option value="prcie"><b>Price</b></option>
                            <option value="rating"><b>Rating</b></option>
                        </select> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                    <div className="card"> <img className="card-img-top" src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div className="card-body">
                            <h5><b>Multi Grain Bread</b> </h5>
                            <div className="d-flex flex-row my-2">
                                <div className="text-muted">₹110/loaf</div>
                                <div className="ml-auto"> <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange"></span></button> <span className="px-sm-1">1 loaf</span> <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange"></span></button> </div>
                            </div> <button className="btn w-100 rounded my-2">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                    <div className="card"> <img className="card-img-top" src="https://images.pexels.com/photos/3085146/pexels-photo-3085146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div className="card-body">
                            <h5><b>Bagels</b> </h5>
                            <div className="d-flex flex-row my-2">
                                <div className="text-muted">₹35/piece</div>
                                <div className="ml-auto"> <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange"></span></button> <span className="px-sm-1">1 pc</span> <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange"></span></button> </div>
                            </div> <button className="btn w-100 rounded my-2">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                    <div className="card"> <img className="card-img-top" src="https://images.pexels.com/photos/1448665/pexels-photo-1448665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div className="card-body">
                            <h5><b>White Bread</b> </h5>
                            <div className="d-flex flex-row my-2">
                                <div className="text-muted">₹80/loaf</div>
                                <div className="ml-auto"> <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange"></span></button> <span className="px-sm-1">1 loaf</span> <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange"></span></button> </div>
                            </div> <button className="btn w-100 rounded my-2">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                    <div className="card"> <img className="card-img-top" src="https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div className="card-body">
                            <h5><b>Baguette</b> </h5>
                            <div className="d-flex flex-row my-2">
                                <div className="text-muted">₹160/piece</div>
                                <div className="ml-auto"> <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange"></span></button> <span className="px-sm-1">1 pc</span> <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange"></span></button> </div>
                            </div> <button className="btn w-100 rounded my-2">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                    <div className="card"> <img className="card-img-top" src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div className="card-body">
                            <h5><b>Masala Bun</b> </h5>
                            <div className="d-flex flex-row my-2">
                                <div className="text-muted">₹85/piece</div>
                                <div className="ml-auto"> <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange"></span></button> <span className="px-sm-1">1 pc</span> <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange"></span></button> </div>
                            </div> <button className="btn w-100 rounded my-2">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                    <div className="card d-relative"> <img className="card-img-top" src="https://images.pexels.com/photos/3570/morning-breakfast-croissant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div className="card-body">
                            <h5><b>Croissant</b> </h5>
                            <div className="rounded bg-white discount" id="orange">10% off</div>
                            <div className="d-flex flex-row my-2">
                                <div className="text-muted price"><del>₹55</del>₹45/piece</div>
                                <div className="ml-auto"> <button className="border rounded bg-white sign"><span className="fa fa-plus" id="orange"></span></button> <span>1pc</span> <button className="border rounded bg-white sign"><span className="fa fa-minus" id="orange"></span></button> </div>
                            </div> <button className="btn w-100 rounded my-2">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>;
};

export default Home;
