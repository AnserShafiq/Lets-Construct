import * as api from '../../../Api/index.js';


export const createProduct = (user) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(user);

    dispatch({ type: 'CREATE_PRODUCT', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};