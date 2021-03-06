import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { connect } from "react-redux";

const Navbar = ({cart}) => {
    const [cartCount, setCartCount] = useState(0);

    // const [search, setSearch] = useState("")
    // export const handleChange = e => {
    //     setSearch(e.target.value);
    // };

    // const products = products.filter(product =>
    //     product.toLowerCase().includes(search.toLowerCase() ) 
    // );

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  
  return <div> <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom"> <Link className="navbar-brand ml-2 font-weight-bold" to="/"><span id="burgundy">Shopping Complex</span></Link> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
  <div className="collapse navbar-collapse" id="navbarColor">
      <ul className="navbar-nav">
          <li className="nav-item rounded bg-light search-nav-item"><input type="text" id="search" className="bg-light"  placeholder="Search shoes, tshirts, bags"/><span className="fa fa-search text-muted"></span></li>
          <li className="nav-item"><Link className="nav-link" to="/signup"><span className="fas fa-user"></span><span className="text">Login</span></Link> </li>        
          <li className="nav-item "><Link className="nav-link" to="/cart"><span className="fa fa-shopping-cart"></span><span className="text">Cart</span></Link></li>
          {/* <li className="nav-item "><Link className="nav-link" to="/cart"><span className="fa fa-shopping-cart"></span><span className="text">Cart</span></Link></li> */}
          <span className= "item">{cartCount}</span>
      </ul>
  </div>
</nav></div>;
};


const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
export default connect(mapStateToProps)(Navbar);
  

