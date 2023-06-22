const workersOrderPlaced = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_WORKERS_ORDER':
        return [...state,action.payload];
      case 'FETCH_WORKERS_ORDER':
        return action.payload;
      default:
        return state;
    }
  };
  
export default workersOrderPlaced;
  