import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link
} from "react-router-dom";
import {useParams} from "react-router-dom";
import { Dummy } from '../DummyData/Dummy';
import Productdetails from "../Productdetails/Productdetails";

const Product = () => {
    // const {id} = useParams()
    // console.log("Happy")
    // const filteredproduct = Dummy.filter((c)=>c.id == {id})
    // console.log(filteredproduct[0].text)

  return <div>
  {/* <Routes>
        <Route path="id" element={<Productdetails/>} />
  </Routes> */}
  {/* <h1>p</h1> */}
  <Productdetails></Productdetails>
  {/* <h1>{filteredproduct[0].text}</h1> */}
  
  {/* <Productdetails src={filteredproduct.image} name={filteredproduct.text} price={filteredproduct.price} ></Productdetails>     */}
  </div>
};

export default Product;
