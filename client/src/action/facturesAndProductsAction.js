import axios from "axios";
import {
  ADD_FACTURE_FAILED,
  ADD_FACTURE_SUCCESS,
  ADD_PRODUIT_FAILED,
  ADD_PRODUIT_SUCCESS,
  GET_FACTURE_FAILED,
  GET_FACTURE_SUCCESS,
  GET_PRODUIT_FAILED,
  GET_PRODUIT_SUCCESS,
  UPDATE_FACTURE_FAILED,
  UPDATE_FACTURE_SUCCESS,
  UPDATE_PRODUIT_FAILED,
  UPDATE_PRODUIT_SUCCESS,
  DELETE_FACTURE_FAILED,
  DELETE_FACTURE_SUCCESS,
  DELETE_PRODUIT_FAILED,
  DELETE_PRODUIT_SUCCESS,
} from "./types";

//Actions of Facture
// 1-Add Facture Action
export const addFacture = (facture) => (dispatch) => {
  axios
    .post(`${process.env.API_URL}/facture/addFacture`, facture)
    .then((res) =>
      dispatch({
        type: ADD_FACTURE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_FACTURE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get Facture Action
export const getFacture = () => (dispatch) => {
  axios
    .get(`${process.env.API_URL}/facture/allFacture`)
    .then((res) =>
      dispatch({
        type: GET_FACTURE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_FACTURE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update Facture Action
export const updateFacture = (facture) => (dispatch) => {
  axios
    .put(`${process.env.API_URL}/facture/updateFacture`, facture)
    .then((res) =>
      dispatch({
        type: UPDATE_FACTURE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_FACTURE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete Facture Action
export const deleteFacture = (id) => (dispatch) => {
  axios
    .delete(`${process.env.API_URL}/facture/deleteFacture/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_FACTURE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_FACTURE_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Actions of Produit
// 1-Add Produit Action
export const addProduit = (produit) => (dispatch) => {
  axios
    .post(`${process.env.API_URL}/products/addProduct`, produit)
    .then((res) =>
      dispatch({
        type: ADD_PRODUIT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_PRODUIT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get Produit Action
export const getProduit = () => (dispatch) => {
  axios
    .get(`${process.env.API_URL}/products/allProduct`)
    .then((res) =>
      dispatch({
        type: GET_PRODUIT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PRODUIT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update Produit Action
export const updateProduit = (produit) => (dispatch) => {
  axios
    .put(`${process.env.API_URL}/products/updateProduct`, produit)
    .then((res) =>
      dispatch({
        type: UPDATE_PRODUIT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_PRODUIT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete Produit Action
export const deleteProduit = (id) => (dispatch) => {
  axios
    .delete(`${process.env.API_URL}/products/deleteproduct/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_PRODUIT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_PRODUIT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
