import * as Types from "../constants/action-types.js";

const initialState = {
    items: [],
    loading: false,
    cart: [],
};

const reducer = (state = initialState, action) => {
    console.log("action:", action)
    switch(action.type) {
        case Types.DATA_LOADED: {
            return { ...state, items: action.payload}
        }
        case Types.LOADING: {
            return {...state, loading: action.payload}
        }
        case Types.ADD_TO_CART: {
            return { 
                ...state, 
                cart: action.payload
            }
        }
        case Types.FETCH_CART_ITEMS: {
            return {...state, cart: action.payload}
        }
        case Types.REMOVE_FROM_CART: {
            const cart = [...state.cart]
            cart.splice(action.payload.id, 1)
            return {...state, cart}
        }
        case Types.ADD_QUANTITY: {
            let addedItem = state.cart.find(item => item.id === action.payload)
            addedItem.quantity += 1;

            return {
                ...state,
                cart: [...state.cart]
            }
        }
        case Types.SUBTRACT_QUANTITY: {
            let addedItem = state.cart.find(item => item.id === action.payload)
            if(addedItem.quantity > 1) {
                addedItem.quantity -= 1;
            }
            
            return {
                ...state,
                cart: [...state.cart]
            }
        }
        default: {
            return state;
        }
    }
    
}
export default reducer;