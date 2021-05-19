import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFacture,
  deleteFacture,
} from '../../action/facturesAndProductsAction';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '10px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function GetFacture({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const facture = useSelector((state) => state.facturesAndProducts.facture);
  console.log(auth);
  useEffect(() => {
    dispatch(getFacture());
  }, []);
  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      {facture &&
        facture.map((facture, index) => {
          console.log('facture: ', facture);
          return (
            <div className={classes.root} key={index}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Invoice No {index + 1}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <ul>
                      {facture.idProducts &&
                        facture.idProducts.map((product) => {
                          return (
                            <ul key={product._id}>
                              <li>{product.name}</li>
                            </ul>
                          );
                        })}
                      <p>Total Price{facture.totalPrice}</p>
                    </ul>

                    {auth?.user?.role !== 'Cashier' && (
                      <button>
                        <Link to={`/facture/updateFacture/${facture._id}`}>
                          Update
                        </Link>
                      </button>
                    )}

                    <button
                      onClick={() => dispatch(deleteFacture(facture._id))}
                    >
                      Delete
                    </button>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
    </div>
  );
}

export default GetFacture;
