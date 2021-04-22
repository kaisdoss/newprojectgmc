import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getFacture } from "../../action/facturesAndProductsAction";

function GetFacture({history}) {
    return (
        <div>
            <button onClick={() => history.goBack()}  >Back</button>
        </div>
    )
}

export default GetFacture
