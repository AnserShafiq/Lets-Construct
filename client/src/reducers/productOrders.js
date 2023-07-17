const productOrderPlaced = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_PRODUCT_ORDER':
        return [...state,action.payload];
      case 'FETCH_PRODUCT_ORDER':
        return action.payload;
      default:
        return state;
    }
  };
  
export default productOrderPlaced;
  