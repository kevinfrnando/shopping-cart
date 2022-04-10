const plusItem = () =>{
    return {
        type : "PLUS_ITEM",
        action: +1
    }
}

const subtractItem = () => {
    return{
        type: "SUBTRACT_ITEM",
        ACTION: -1
    }
}

export { plusItem, subtractItem }