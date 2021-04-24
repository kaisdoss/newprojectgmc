import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  deleteProduct
} from "../../action/facturesAndProductsAction";
import { Link } from "react-router-dom";

function GetProduct({ history }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.facturesAndProducts.product);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

//   console.log(product);
  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      {product &&
        product.map((product) => {
          return (
            <div key={product._id}>
              <span>{product.name}</span>
              <button >
                <Link to={`/products/updateProduct/${product._id}`} >Update</Link>
              </button>
              <button onClick={() => dispatch(deleteProduct(product._id))}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default GetProduct;
