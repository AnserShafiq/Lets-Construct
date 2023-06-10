const workerUsernamesReducer = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_WORKER':
        return [...state,action.payload];
      case 'FETCH_WORKER_USERNAMES':
        return action.payload;
      default:
        return state;
    }
  };
  
export default workerUsernamesReducer;
  