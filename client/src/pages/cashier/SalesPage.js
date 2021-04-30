import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../action/facturesAndProductsAction';

function SalesPage({ history }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.facturesAndProducts.product);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1)
  ;
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  
  return (
    <div>
      <h2>Sales pagess</h2>
      <button onClick={() => history.goBack()}>Back</button>
      {product &&
        product.map((product) => {
          return (
            <div key={product._id}>
              <span>{product.name}</span>
              <span> {product.price} </span>
              <button onClick={incrementCount}>+</button>
              <span> {count} </span>
              <button onClick={decrementCount}>-</button>
              
            </div>
          );
        })}
        <button>Get Facture</button>
    </div>
  );
}

export default SalesPage;
