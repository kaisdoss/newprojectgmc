import React from "react";
import { Link } from "react-router-dom";

function GFacture({history}) {
  return (
    <div>
      <h2>Gestion de Facture</h2>
      <button onClick={() => history.goBack()}  >Back</button>
      <button>
        <Link to="/facture/addFacture">Add Facture</Link>
      </button>

      <button>
        <Link to="/facture/allFacture">Get All Facture</Link>
      </button>

    </div>
  );
}

export default GFacture;
