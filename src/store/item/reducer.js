const initialState = {
    items : []
};


// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = initialState , action) => {
    if( action.type === "ADD_ITEM"){
        return{
            ...state ,
            items : noRepeatItems( state.items, action.obj, action.type )  
        }
    }
    if( action.type === "REMOVE_ITEM"){
        return{
            ...state,
            items : noRepeatItems( state.items, action.obj, action.type )  

        }
    }

    return state;

}



function noRepeatItems ( items, toFind, action ){

    const find = items.find( e => e.tail === toFind.tail );
    if( find ){
        const index = items.indexOf( find ) 
        if( index > -1 ){
            items.splice( index, 1)
        }
        
        if( action === "ADD_ITEM" ){
            find.count++;
            find.total = find.total + find.price;
        }else if( find.count === 1 ){
            return [ ...items]
        } else{
            find.count--;
            find.total = find.total - find.price;
        }
        return [ ...items, find ]
    }else{
        toFind.count = 1;
        toFind.total = toFind.price;
        return [ ...items, toFind ]
    }
}