import './gproduct.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function GProduct({ history }) {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <h2>Gestion de Product</h2>
      <hr/>
      <div className="buttons-container">

     
        <Link className="main-buttons" to="/products/addProduct">
          Add Product
        </Link> 

        <Link className="main-buttons" to="/products/allProduct">
          Get All Product
        </Link>
        
      </div>
    </div>
  );
}

export default GProduct;
