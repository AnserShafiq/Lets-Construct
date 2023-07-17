import * as api from '../../../Api/index.js';

export const createOrderP = (user) => async (dispatch) => {
    try {
      const { data } = await api.createProductOrder(user);
      dispatch({ type: 'CREATE_PRODUCT_ORDER', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };