const initialState = {
    amount : 0
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = initialState , action) => {
    if( action.type === "ADD_MONEY"){
        return{
            ...state ,
            amount : state.amount + action.cash
        }
    }
    if( action.type === "REMOVE_MONEY"){
        return{
            ...state,
            amount : state.amount - action.cash
        }
    }
    return state;
}