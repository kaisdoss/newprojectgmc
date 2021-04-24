import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../action/facturesAndProductsAction";
import { useLocation } from "react-router-dom";

function UpdateProduct({ history }) {
  let location = useLocation();

  let pathnamePortions = location.pathname.split("/");
  let productId = pathnamePortions[pathnamePortions.length - 1];
  const products = useSelector((state) => state.facturesAndProducts.product);

  let product = products.filter(
    (thisProduct) => thisProduct._id === productId
  )[0];

  const [name, setName] = useState(product?.name);
  const [number, setNumber] = useState(product?.number);
  const [buyingPrice, setBuyingPrice] = useState(product?.buyingPrice);
  const [price, setPrice] = useState(product?.price);
  const [description, setDescription] = useState(product?.description);

  const dispatch = useDispatch();

  const toUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct(
        productId,
        product.name,
        product.number,
        product.buyingPrice,
        product.price,
        product.description
      )
    );
  };
  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <h2>hii</h2>

      <form onSubmit={toUpdateProduct}>
        <div>
          <label>number</label>
          <input
            type="text"
            name="number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </div>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>buyingPrice</label>
          <input
            type="text"
            name="buyingPrice"
            onChange={(e) => setBuyingPrice(e.target.value)}
            value={buyingPrice}
          />
        </div>
        <div>
          <label>price</label>
          <input
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>

        <div>
          <label>description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <button
          onClick={() =>
            dispatch(
              updateProduct({
                name,
                number,
                buyingPrice,
                price,
                description,
              })
            )
          }
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default hot(UpdateProduct);
