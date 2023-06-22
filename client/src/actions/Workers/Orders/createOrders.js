import * as api from '../../../Api/index.js';

export const createOrder = (user) => async (dispatch) => {
    try {
      const { data } = await api.createOrderForWorker(user);
  
      dispatch({ type: 'CREATE_ORDER', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };