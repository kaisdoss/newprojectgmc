import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduit } from "../../action/facturesAndProductsAction";

function AddProduct({history}) {
  const [produit, setProduit] = useState({
    number: "",
    name: "",
    buyingPrice: "",
    price: "",
    description: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduit({ ...produit, [e.target.name]: e.target.value });
  };

  const auth = useSelector((state) => state.auth);

  const toAddProduit = (e) => {
    e.preventDefault();
    dispatch(addProduit(produit));
  };
  return (
    <div>
      <h2>Add Product</h2>
      <button onClick={() => history.goBack()} >Back</button>

      <form onSubmit={toAddProduit}>
        <div>
          <label>number</label>
          <input type="text" name="number" onChange={handleChange} />
        </div>
        <div>
          <label>name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label>buyingPrice</label>
          <input type="text" name="buyingPrice" onChange={handleChange} />
        </div>
        <div>
          <label>price</label>
          <input type="text" name="price" onChange={handleChange} />
        </div>

        <div>
          <label>description</label>
          <input type="text" name="description" onChange={handleChange} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
