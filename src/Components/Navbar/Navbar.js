import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return <div> <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom"> <a className="navbar-brand ml-2 font-weight-bold" href="#"><span id="burgundy">Shopping Complex</span></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
  <div className="collapse navbar-collapse" id="navbarColor">
      <ul className="navbar-nav">
          <li className="nav-item rounded bg-light search-nav-item"><input type="text" id="search" className="bg-light" placeholder="Search shoes, tshirts, bags"/><span className="fa fa-search text-muted"></span></li>
          <li className="nav-item"><a className="nav-link" href="#"><span className="fas fa-user"></span><span className="text">Login</span></a> </li>
          <li className="nav-item "><a className="nav-link" href="#"><span className="fa fa-shopping-cart"></span><span className="text">Cart</span></a></li>
          <span className= "item">1</span>
      </ul>
  </div>
</nav></div>;
};

export default Navbar;
