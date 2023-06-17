import * as api from '../../Api/index.js';


export const createWorker = (user) => async (dispatch) => {
  try {
    const { data } = await api.createWorker(user);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchWorkerUsernames = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkerUsernames();
    dispatch({ type: 'FETCH_WORKER_USERNAMES', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
  