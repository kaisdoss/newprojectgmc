import React, { Fragment } from 'react';

const SingleInvoice = ({ totalPrice, salesList }) => {
  // console.log('salesList: ', salesList);
  return (
    <div>
      {salesList &&
        salesList.map((product) => (
          <Fragment key={product._id}>
            <p>{product.name}</p>
            <ul>
              <li>Quantity: {product.qte}</li>
              <li>Unit Price: {product.price}</li>
              <li>Subtotal: {product.subTotal}</li>
            </ul>
          </Fragment>
        ))}
      Total Price : {totalPrice}
    </div>
  );
};

export default SingleInvoice;
