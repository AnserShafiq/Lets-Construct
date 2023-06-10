// import { combineReducers } from "redux";
// import posts from './posts.js';
// import customers from './customerUser.js';
// import workerUsernamesReducer from './workerUser.js';


// export default combineReducers({
//     posts: posts,
//     customers: customers,
//     workerUsernames: workerUsernamesReducer,
// })
import { combineReducers } from "redux";
import posts from './posts.js';
import customers from './customerUser.js';
import workerUsernames from './workerUser.js';

export default combineReducers({
  posts: posts,
  customers: customers,
  workerUsernames: workerUsernames,
});
