const addMoney = ( c ) =>{
    return{
        type : "ADD_MONEY",
        cash: c
    }
}

const subtractMoney = ( c ) =>{
    return{
        type : "SUBTRACT_MONEY",
        cash: c
    }
}

export { addMoney, subtractMoney };