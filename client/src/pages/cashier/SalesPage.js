import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementCount,
  decrementCount,
} from '../../action/facturesAndProductsAction';
import { getProduct } from '../../action/facturesAndProductsAction';
import SalesProducts from './SalesProducts';

function SalesPage({ history }) {
  const [salesList, setSalesList] = useState([]);
  const count = useSelector((state) => state.facturesAndProducts.count);
  const product = useSelector((state) => state.facturesAndProducts.product);
  const dispatch = useDispatch();

  const addProductToList = (product) => {
    setSalesList([
      ...salesList.filter((el) => el._id !== product._id),
      product,
    ]);
  };

  const deleteProductFromList = (product) => {
    setSalesList(
      [...salesList.filter((el) => el._id !== product._id), product].filter(
        (el) => el.qte > 0
      )
    );
  };

  let Total = salesList.reduce((sum, { subTotal }) => sum + subTotal, 0);
  console.log('Total 11111111111 =>:', Total);
  
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <h2>Sales pagess</h2>
      <button onClick={() => history.goBack()}>Back</button>
      {product &&
        product.map((product) => {
          return (
            <SalesProducts  key={product._id}
              addProductToList={addProductToList}
              deleteProductFromList={deleteProductFromList}
              product={product}
            ></SalesProducts>
          
          );
        })}
      <div>
        <h3>{product.name}</h3>
        <h3>{product.subTotal}$</h3>
        {/* <h3>{}</h3> */}
        <h3>{Total}</h3>
      </div>

      <button>Get Facture</button>
    </div>
  );
}

export default hot(SalesPage);
