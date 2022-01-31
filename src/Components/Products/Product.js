import React from 'react';
import {useParams} from "react-router-dom";
import { Dummy } from '../DummyData/Dummy';
import Productdetails from "../Productdetails/Productdetails";

const Product = () => {
    const id = 2
    const filteredproduct = Dummy.filter((c)=>c.id == id)
    console.log(filteredproduct[0].text)
    //const [product,setProduct] = useState([]);

  return <div>
  {/* <h1>{filteredproduct[0].text}</h1> */}
  <Productdetails></Productdetails>    
  </div>
};

export default Product;
