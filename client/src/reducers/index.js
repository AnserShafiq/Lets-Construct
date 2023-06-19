import { combineReducers } from "redux";
import customers from './customerUser.js';
import workerUsernames from './workerUser.js';
import productDealersUsernames from "./productDealers.js";

export default combineReducers({
  customers: customers,
  workerUsernames: workerUsernames,
  productDealersUsernames: productDealersUsernames, 
});
