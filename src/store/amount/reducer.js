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
    if( action.type === "SUBTRACT_MONEY"){
        let _amount = state.amount - action.cash;
        return{
            ...state,
            amount : _amount < 0 ? 0 : _amount
        }
    }
    return state;
}