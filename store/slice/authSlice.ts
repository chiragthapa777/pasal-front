import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import useAxios from "../../hooks/useAxios";
import {baseUrl} from "../../api/apiUrl";
import {toast} from "react-toastify";
import {any} from "prop-types";

type initStateType = {
    user:any
    cart:any
    shipping:any
    error:string
    loading:boolean
    cartLoading:boolean
    shippingLoading: boolean
}

const initialState: initStateType = {
    user: null,
    cart: null,
    shipping: null,
    error: "",
    loading: false,
    cartLoading: false,
    shippingLoading: false
}

export const loadUser = createAsyncThunk(
    'auth/loadUser', async (parameter: any, {rejectWithValue}) => {
        try {
            const axios = useAxios()
            // console.log("Parameters yesari aauxa", parameter)
            const data = await axios.get(`${baseUrl}/users/loggedin`)
            console.log("data:", data)
            return data?.data?.data
        } catch (e: any) {
            // console.log(e)
            return rejectWithValue(e.response.data.data);
        }
    }
)
export const addProductToCart = createAsyncThunk(
    'auth/addProductToCart', async (parameter: {productId:number, quantity:number, toast:any}, {rejectWithValue}) => {
        const {productId, quantity} = parameter
        try {
            const axios = useAxios()
            const data = await axios.put(`${baseUrl}/cart/addProduct`,{productId, quantity})
            toast.success(
                `Product added`,
                {
                    theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
                    position: "bottom-left"
                }
            );
            console.log(data)
            return data?.data?.data
        } catch (e: any) {
            console.log(e)
            toast.error(
                `${e?.response?.data?.data || 'Product was not added'}`,
                {
                    theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
                    position: "bottom-left"
                }
            );
            return rejectWithValue(e.response.data.data);
        }
    }
)

export const removeCartProduct = createAsyncThunk(
    'auth/removeCartProduct', async (parameter: {productId:number}, {rejectWithValue}) => {
        const {productId} = parameter
        try {
            const axios = useAxios()
            const data = await axios.delete(`${baseUrl}/cart/removeProduct/${productId}`)
            toast.success(
                `Product removed`,
                {
                    theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
                    position: "bottom-left"
                }
            );
            console.log(data)
            return data?.data?.data
        } catch (e: any) {
            console.log(e)
            toast.error(
                `${e?.response?.data?.data || 'Product was not removed'}`,
                {
                    theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
                    position: "bottom-left"
                }
            );
            return rejectWithValue(e.response.data.data);
        }
    }
)

export const editCartProduct = createAsyncThunk(
    'auth/editCartProduct', async (parameter: {productId:number, quantity:number}, {rejectWithValue}) => {
        const {productId, quantity} = parameter
        try {
            const axios = useAxios()
            const data = await axios.put(`${baseUrl}/cart/editProduct/${productId}`,{quantity})
            toast.success(
                `Product updated`,
                {
                    theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
                    position: "bottom-left"
                }
            );
            console.log(data)
            return data?.data?.data
        } catch (e: any) {
            console.log(e)
            toast.error(
                `${e?.response?.data?.data || 'Product was not updated'}`,
                {
                    theme:window.localStorage.getItem("lightMode") === "true"? "light": "dark",
                    position: "bottom-left"
                }
            );
            return rejectWithValue(e.response.data.data);
        }
    }
)

// in every function param = {data, toast, navigate}
// get user cart shipping if jwt in local or cookie in param
// add remove edit item in cart
// shipping address edit


// @ts-ignore
// @ts-ignore
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state, action) => {
            state = initialState
        },
        setLogout: (state, action) => {
            localStorage.clear();
            state = initialState;
            // loadUser('')
        },
    },
    extraReducers: (builder) => {
        // [loadUser.pending]:(state:any,action:any)=>{
        //     state.loading = true
        // },
        // [loadUser.fulfilled]:(state:any,action:any)=>{
        //     state.loading = false
        // },
        // [loadUser.rejected]:(state:any,action:any)=>{
        //     state.loading = false
        //     state.error = action.payload.message
        // },

        // loadUser
        builder.addCase(loadUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(loadUser.fulfilled, (state, action) => {
            state.loading = false
            const cart = action.payload.cart
            const shipping = action.payload.shipping
            delete action.payload.cart
            delete action.payload.shipping
            state.user = action.payload
            state.cart = cart
            state.shipping = shipping
        })
        builder.addCase(loadUser.rejected, (state, action) => {
            console.log(action)
            state.loading = false
            // @ts-ignore
            state.error = action.payload || ''
        })

        //add product to cart
        builder.addCase(addProductToCart.pending, (state, action) => {
            state.cartLoading = true
        })
        builder.addCase(addProductToCart.fulfilled, (state, action) => {
            state.cartLoading = false
            // @ts-ignore
            state.cart = {...state.cart, cartDetails:[...state.cart.cartDetails,action.payload]}
        })
        builder.addCase(addProductToCart.rejected, (state, action) => {
            state.cartLoading = false
            // @ts-ignore
            state.error = action.payload || ''
        })

        //remove product to cart
        builder.addCase(removeCartProduct.pending, (state, action) => {
            state.cartLoading = true
        })
        builder.addCase(removeCartProduct.fulfilled, (state, action) => {
            state.cartLoading = false
            // @ts-ignore
            state.cart = {...state.cart, cartDetails:state.cart.cartDetails.filter((det:any)=>det.id!==action.payload.id)}
        })
        builder.addCase(removeCartProduct.rejected, (state, action) => {
            state.cartLoading = false
            // @ts-ignore
            state.error = action.payload || ''
        })
        //editCartProduct product to cart
        builder.addCase(editCartProduct.pending, (state, action) => {
            state.cartLoading = true
        })
        builder.addCase(editCartProduct.fulfilled, (state, action) => {
            state.cartLoading = false
            // @ts-ignore
            state.cart = {...state.cart, cartDetails:state.cart.cartDetails.map((det:any)=> {
                    if(det.id ===action.payload.id){
                        return action.payload
                    }else{
                        return det
                    }
                })}
        })
        builder.addCase(editCartProduct.rejected, (state, action) => {
            state.cartLoading = false
            // @ts-ignore
            state.error = action.payload || ''
        })
    }
});

export const {reset, setLogout} = authSlice.actions;

export default authSlice.reducer;
