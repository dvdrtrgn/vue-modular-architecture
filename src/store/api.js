import axios from "axios";
import data from "./data.json";

export const getProducts = () => {
  // return axios.get("https://fakestoreapi.com/products");
  return { data };
};

export const getProduct = id => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};
