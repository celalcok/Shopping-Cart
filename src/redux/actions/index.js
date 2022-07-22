export const addToCart = (book) =>{
    return {
        type:"ADD_TO_CART",
        payload:book
    }
}
export const removeFromCart = (id) =>{
    return {
        type:"REMOVE_FROM_CART",
        payload:id
    }
}