import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementCount,
  decrementCount,
} from '../../action/counterAction';
import { getProduct } from "../../action/facturesAndProductsAction"

function SalesPage({ history }) {
  const count = useSelector((state) => state.counter.count);
  const product = useSelector((state) => state.facturesAndProducts.product);
  const dispatch = useDispatch();
  // const id = product.id;
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  useEffect(() => {
    console.log("Fuck it!", product);
  }, []);
  return (
    <div>
      <h2>Sales pagess</h2>
      <button onClick={() => history.goBack()}>Back</button>
      {product &&
        product.map((product) => {
          console.log(product.id)
          return (
            <div key={product._id}>
              <span>{product.name}</span>
              <span> {product.price} $</span>
              <button onClick={() => dispatch(incrementCount(product._id))}>
                +
              </button>
              <span> {count} </span>
              <button onClick={() => dispatch(decrementCount(product._id))}>
                -
              </button>
            </div>
          );
        })}
      <button>Get Facture</button>
    </div>
  );
}

export default hot(SalesPage);
