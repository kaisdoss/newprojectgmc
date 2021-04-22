import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteProduit } from "../../action/facturesAndProductsAction";

function DeleteProduct({history}) {
    return (
        <div>
            <button onClick={() => history.goBack()} >Back</button>
            
        </div>
    )
}

export default DeleteProduct
