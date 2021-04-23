import axios from "axios";
import {
  ADD_FACTURE_FAILED,
  ADD_FACTURE_SUCCESS,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_SUCCESS,
  GET_FACTURE_FAILED,
  GET_FACTURE_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_SUCCESS,
  UPDATE_FACTURE_FAILED,
  UPDATE_FACTURE_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_FACTURE_FAILED,
  DELETE_FACTURE_SUCCESS,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_SUCCESS,
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

//Actions of Product
// 1-Add Product Action
export const addProduct = (product) => (dispatch) => {
  axios
    .post(`${process.env.API_URL}/products/addProduct`, product)
    .then((res) =>
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_PRODUCT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get Product Action
export const getProduct = () => (dispatch) => {
  axios
    .get(`${process.env.API_URL}/products/allProduct`)
    .then((res) =>
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PRODUCT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update Product Action
export const updateProduct = (product) => (dispatch) => {
  console.log("that is Product", product);
  axios
    .put(`${process.env.API_URL}/products/updateProduct`, product)
    .then((res) => {
      console.log("that is res:", res);
      return dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: UPDATE_PRODUCT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete Product Action
export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete(`${process.env.API_URL}/products/deleteproduct/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_PRODUCT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
