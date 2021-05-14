import React, { useState } from 'react';

const SalesProducts = ({
  product,
  addProductToList,
  deleteProductFromList,
}) => {

  const [count, setCount] = useState(0);
  const incrementQuantity = (e) => {
    setCount(count + 1);
    addProductToList({
      ...product,
      qte: count + 1,
      subTotal: (count + 1) * product.price,
    });
  };

  const deccrementQuantity = (e) => {
    if (count > 0) setCount(count - 1);
    deleteProductFromList({
      ...product,
      qte: count - 1,
      subTotal: (count + 1) * product.price,
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
