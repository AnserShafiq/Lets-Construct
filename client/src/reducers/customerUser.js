const reducer = (customers=[],action) =>{
    switch(action.type){
        case 'CREATE_CUSTOMER':
            return [...customers,action.payload];
        case 'FETCH_CUSTOMER_USERNAMES':
            return action.payload;
        default:
            return customers;
    }
}
export default reducer;