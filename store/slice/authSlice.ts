import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import useAxios from "../../hooks/useAxios";
import {baseUrl} from "../../api/apiUrl";


const initialState = {
    user: null,
    cart: null,
    shipping: null,
    error: "",
    loading: false,
}

export const loadUser = createAsyncThunk(
    'auth/loadUser', async (parameter:any, {rejectWithValue}) => {
        try {
            const axios = useAxios()
            console.log("Parameters yesari aauxa",parameter)
            const data =await  axios.get(`${baseUrl}/users/loggedin`)
            console.log(data)
            return data?.data?.data
        } catch (e:any) {
            console.log(e)
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
        },
    },
    extraReducers:(builder)=> {
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
        builder.addCase(loadUser.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(loadUser.fulfilled,(state,action)=>{
            state.loading=false
            state.user=action.payload
        })
        builder.addCase(loadUser.rejected,(state,action)=>{
            state.loading=false
        })
        // yesarinai aaru async thunk functions ko lai pani garne
        // builder.addCase(loadUser.rejected,(state,action)=>{
        //     state.loading=false
        // })
    }
});

export const {reset, setLogout} = authSlice.actions;

export default authSlice.reducer;
