import axios from 'axios';

const url1 = 'http://localhost:5000/posts';
const url2 = 'http://localhost:5000/customers';
const url5 = 'http://localhost:5000/customers/usernames';
const url3 = 'http://localhost:5000/workers';
const url4 = 'http://localhost:5000/workers/usernames';
const url6 = 'http://localhost:5000/workers/login';


export const fetchPost = () => axios.get(url1);

export const createPost = (newPost) => axios.post(url1, newPost);

export const createUser = (newUser) => axios.post(url2, newUser);

export const fetchUser = (fullName, password) => axios.post(url2, { fullName, password });

export const fetchCustomerUsernames = () => axios.get(url5);

export const createWorker = (newUser) => axios.post(url3, newUser);

export const fetchWorker = (userName, password) => axios.post(url6, { userName, password });

export const fetchWorkerUsernames = () => axios.get(url4); // Fetch worker usernames
