import React from "react";
import { Link } from "react-router-dom";

function GProduct({history}) {
  return (
    <div>
      <h2>Gestion de Product</h2>
      <button>
        <Link to="/products/addProduct">Add Product</Link>
      </button>
      <button>
        <Link to="/products/deleteProduct">Delete Product</Link>
      </button>
      <button>
        <Link to="/products/allProduct">Get All Product</Link>
      </button>
      <button>
        <Link to="/products/updateProduct">Update Product</Link>
      </button>
    </div>
  );
}

export default GProduct;
