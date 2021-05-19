import React, { useState } from 'react';

const SalesProducts = ({
  product,
  addProductToList,
  deleteProductFromList,
}) => {
  const [count, setCount] = useState(0);
  const incrementQuantity = (e) => {
    setCount(count + 1);
    console.log('count :', count);
    console.log('subTotal :', count * product.price);
    addProductToList({
      ...product,
      qte: count,
      subTotal: count * product.price,
    });
  };

  const deccrementQuantity = (e) => {
    if (count > 0) setCount(count - 1);
    console.log('count :', count);
     console.log('subTotal :', count * product.price);
    deleteProductFromList({
      ...product,
      qte: count,
      subTotal: count * product.price,
    });
  };

  return (
    <div>
      <p>{product.name}</p>
      <button onClick={incrementQuantity}>+</button>
      {count}
      <button onClick={deccrementQuantity}>-</button>
    </div>
  );
};

export default SalesProducts;
