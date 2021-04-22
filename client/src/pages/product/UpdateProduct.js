import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateProduit } from "../../action/facturesAndProductsAction";

function UpdateProduct({history}) {
    return (
        <div>
            <button onClick={() => history.goBack()}  >Back</button>
            
        </div>
    )
}

export default UpdateProduct
