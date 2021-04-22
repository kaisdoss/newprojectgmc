import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduit,
  deleteProduit,
  updateProduit,
} from "../../action/facturesAndProductsAction";
import { Link } from "react-router-dom";

function GetProduct({ history }) {
  const dispatch = useDispatch();
  const produit = useSelector((state) => state.facturesAndProducts.produit);
  useEffect(() => {
    dispatch(getProduit());
  }, []);

  console.log(produit);
  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      {produit &&
        produit.map((produit) => {
          return (
            <div key={produit._id}>
              <span>{produit.name}</span>
              <button to={`/updateproduct/${produit._id}`}>Update</button>
              <button onClick={() => dispatch(deleteProduit(produit._id))}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default GetProduct;
