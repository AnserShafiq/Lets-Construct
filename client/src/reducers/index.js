import { combineReducers } from "redux";
import posts from './posts.js';
import customers from './customerUser.js';

export default combineReducers({
    posts: posts,
    customers: customers,
})