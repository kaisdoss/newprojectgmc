import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFacture, deleteFacture } from "../../action/facturesAndProductsAction";
import { Link } from "react-router-dom";

function GetFacture({history}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
    const facture = useSelector((state) => state.facturesAndProducts.facture);
    console.log(auth)
    useEffect(() => {
      dispatch(getFacture());
    }, []);
    return (
        <div>
          
      <button onClick={() => history.goBack()}>Back</button>
      {facture &&
        facture.map((facture) => {
          return (
            <div key={facture._id}>
              <span>{facture.totalPrice}</span>

              {auth?.user?.role !== 'Cashier' && (
              <button >
                <Link to={`/facture/updateFacture/${facture._id}`} >Update</Link>
              </button> )}

              <button onClick={() => dispatch(deleteFacture(facture._id))}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
    )
}

export default GetFacture
