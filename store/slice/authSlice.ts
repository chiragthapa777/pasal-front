import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../../hooks/useAxios";


const initialState ={
    user: null,
    error: "",
    loading: false,
  }
const authSlice = createSlice({
    name: "auth",
    initialState ,
    reducers: {
        reset: (state, action) => {
            state=initialState
          },
        setLogout: (state, action) => {
            localStorage.clear();
            state.user = null;
          },
    },
  });

export const { reset, setLogout } = authSlice.actions;

export default authSlice.reducer;