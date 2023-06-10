// import * as api from '../Api';

// export const createUser = (user) => async(dispatch) =>{
//     try {
//         const {data} = await api.createUser(user);

//         dispatch({type: 'CREATE', payload: data});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// export const fetchCustomerUsernames = () => async (dispatch) => {
//     try {
//       const { data } = await api.fetchCustomerUsernames();
//       dispatch({ type: 'FETCH_CUSTOMER_USERNAMES', payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
import * as api from '../Api';

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({ type: 'CREATE_CUSTOMER', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCustomerUsernames = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCustomerUsernames();
    dispatch({ type: 'FETCH_CUSTOMER_USERNAMES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
