const reducer = (customers=[],action) =>{
    switch(action.type){
        case 'CREATE':
            return [...customers,action.payload];
        default:
            return customers;
    }
}
export default reducer;