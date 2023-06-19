const productDealersUsernamesReducer = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_PRODUCT_DEALER':
        return [...state,action.payload];
      case 'FETCH_PRODUCT_DEALER_USERNAMES':
        return action.payload;
      default:
        return state;
    }
  };
  
export default productDealersUsernamesReducer;
  