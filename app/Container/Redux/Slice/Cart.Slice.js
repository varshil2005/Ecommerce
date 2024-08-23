import { createSlice } from "@reduxjs/toolkit"

const initialstate = {
    isLoading : false,
    cart : [],
    error : null
}

const CartSlice = createSlice({
    name : 'cart',
    initialState : initialstate,
    reducers : {
        addCart :(state , action) => {
            console.log("idididiiididiididid",action.payload);

            const index = state.cart.findIndex((v) => v.pid === action.payload);
            console.log("indexindexindexindex",index);
            

            if (index === -1) {
                state.cart.push({pid : action.payload , qtn : 1})
            } else {
                state.cart[index].qtn++;
            }
            
        },

        IncQty : (state,action) => {
            const index = state.cart.findIndex((v) => v.pid === action.payload);
            state.cart[index].qtn++;
        },

        DecQty : (state,action) => {
            const index = state.cart.findIndex((v) => v.pid === action.payload);
            if(state.cart[index].qtn > 1) {
            state.cart[index].qtn--;
            }
        }
    }
})

export const {addCart,IncQty,DecQty} = CartSlice.actions
export default CartSlice.reducer