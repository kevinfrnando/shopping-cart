const addItem = ( e ) =>{
    // console.log( e )
    return{
        type: "ADD_ITEM",
        obj : e
    }
}

const removeItem = ( e ) =>{
    return{
        type: "REMOVE_ITEM",
        obj : e
    }
}


export { addItem, removeItem };