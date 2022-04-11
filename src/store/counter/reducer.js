const initialState = {
    items : 0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = initialState, action  ) =>{
    if( action.type === "PLUS_ITEM"){
        return{
            ...state ,
            items : state.items + action.action
        }
    }
    if( action.type === "SUBTRACT_ITEM"){
        return{
            ...state ,
            items : state.items <= 1 ? 0 : state.items - action.action
        }
    }
    return state;
}