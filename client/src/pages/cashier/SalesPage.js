import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../action/facturesAndProductsAction';
import { postInvoice } from '../../action/facturesAndProductsAction';
import SalesProducts from './SalesProducts';
import SingleInvoice from './SingleInvoice';
import './styles.css';

function SalesPage({ history }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.facturesAndProducts.product);
  const [salesList, setSalesList] = useState([]);
  const [isFactureShow, setIsFactureShow] = useState(false);
  const idUsers = useSelector((state) => state.auth.user._id);

  const showInvoice = (e) => {
    setIsFactureShow(true);
  };

  const addProductToList = (product) => {
    console.log('salesList: ', salesList);
    setSalesList([
      ...salesList.filter((el) => el._id !== product._id),
      product,
    ]);
  };
  
  const deleteProductFromList = (product) => {
    console.log('salesList: ', salesList);
    setSalesList(
      [...salesList.filter((el) => el._id !== product._id), product].filter(
        (el) => el.qte > 0
      )
    );
  };

  const handlePostInvoice = (e) => {
    let sales = {
      idProducts: salesList.map((el) => el._id),
      idUsers: [idUsers],
      totalPrice: totalPrice,
    };
    e.preventDefault();
    dispatch(postInvoice(sales));
  };

  let totalPrice = salesList.reduce((sum, { subTotal }) => sum + subTotal, 0);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <h2>Sales pagess</h2>
      <div className="Product-container">
        <div className="Invoice-input">
          <button onClick={() => history.goBack()}>Back</button>
          {product &&
            product.map((product) => {
              return (
                <SalesProducts
                  key={product._id}
                  addProductToList={addProductToList}
                  deleteProductFromList={deleteProductFromList}
                  product={product}
                ></SalesProducts>
              );
            })}
          <div>
            <h3>{product.name}</h3>
            <h3>{product.subTotal}$</h3>
            <h3>{totalPrice}</h3>
          </div>
          <button onClick={showInvoice}>Get Facture</button>
          <button onClick={handlePostInvoice}>Send Invoice</button>
        </div>
        <div className="Invoice-output">
          {isFactureShow && (
            <SingleInvoice totalPrice={totalPrice} salesList={salesList} />
          )}
        </div>
      </div>
    </div>
  );
}

export default hot(SalesPage);
