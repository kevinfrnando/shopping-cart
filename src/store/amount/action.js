const addMoney = ( c ) =>{
    return{
        type : "ADD_MONEY",
        cash: c
    }
}

const removeMoney = ( c ) =>{
    return{
        type : "REMOVE_MONEY",
        cash: -c
    }
}

export { addMoney, removeMoney };