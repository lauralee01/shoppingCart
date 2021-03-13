import * as Types from '../constants/action-types'

export const startLoading = () => dispatch => {
    dispatch({
        type: Types.LOADING,
        payload: true
    })
}

export const stopLoading = () => dispatch => {
    dispatch({
        type: Types.LOADING,
        payload: false
    })
}

export const increaseQuantity = (id) => dispatch => {
    dispatch({
        type: Types.ADD_QUANTITY,
        payload: id
    })
}

export const decreaseQuantity = (id) => dispatch => {
    dispatch({
        type: Types.SUBTRACT_QUANTITY,
        payload: id
    })
}

export const getData = () => async(dispatch) => {
    dispatch(startLoading());
    try {
        const response = await fetch("http://localhost:3000/items");
        const result = await response.json()
        dispatch({ type: Types.DATA_LOADED, payload: result });
        dispatch(stopLoading());
    }
    catch (error) {
        dispatch(stopLoading());
        alert("Something Went Wrong");
        throw error
    }
   
}

export const addToCart = (data) => async(dispatch) => {
    data.quantity = 1
    dispatch(startLoading());
    try {
        const response = await fetch("http://localhost:3000/cart", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
        })
        const result = await response.json()
        dispatch({ type: Types.ADD_TO_CART, payload: result });
        dispatch(stopLoading());
        alert("Successful!!! Item has been added to cart")
        dispatch(fetchCartItems());
    }
    catch (error) {
        dispatch(stopLoading());
        alert("Something Went Wrong");
        throw error
    }
}

export const fetchCartItems = () => async(dispatch) => {
    dispatch(startLoading());
    try {
        const response = await fetch("http://localhost:3000/cart");
        const result = await response.json()
        dispatch({ type: Types.FETCH_CART_ITEMS, payload: result });
        dispatch(stopLoading());
    }
    catch (error) {
        dispatch(stopLoading());
        alert("Something Went Wrong");
        throw error
    }
   
}

export const removeFromCart = (id) => async(dispatch) => {
    dispatch(startLoading());
    try {
        const response = await fetch(`http://localhost:3000/cart/${id}`, {
            method: "DELETE"
        })
        const result = await response.json()
        dispatch({ type: Types.REMOVE_FROM_CART, payload: result });
        dispatch(stopLoading());
        alert("Successful!!! Item has been removed from cart")
        dispatch(fetchCartItems());
    }
    catch (error) {
        dispatch(stopLoading());
        alert("Something Went Wrong");
        throw error
    }
}