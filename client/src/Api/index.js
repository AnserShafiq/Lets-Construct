import axios from 'axios';

const url1 = 'http://localhost:5000/posts';
const url2 = 'http://localhost:5000/customers';

export const fetchPost = () => axios.get(url1);
export const createPost = (newPost) => axios.post(url1, newPost);
export const createUser = (newUser) => axios.post(url2, newUser);