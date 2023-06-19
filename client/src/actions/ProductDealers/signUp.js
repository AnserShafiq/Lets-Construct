import * as api from '../../Api/index.js';


export const createProductDealer = (user) => async (dispatch) => {
  try {
    const { data } = await api.createProductDealer(user);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchProductDealerUsernames = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProductDealerUsernames();
    dispatch({ type: 'FETCH_PRODUCT_DEALER_USERNAMES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
  