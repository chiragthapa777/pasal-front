import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from ".."

export const ProfileSlice = createSlice({
    name:"profile",
    initialState:{
        name: null,
        age:null
    },
    reducers:{
        setProfileData: (state, action)=>{
            state.name=action.payload
        },
        setAge:(state, action)=>{
            state.age=action.payload
        }
    },
    extraReducers:{
        [HYDRATE] : (state, action)=>{
            // TODO - handle client side state override
            //when has getserverside props
            console.log('hydrate',action.payload)
            if(!action.payload.profile.name){
                return state
            }
            
            state.name=action.payload.profile.name
        }
    }
})

export const {setProfileData, setAge}=ProfileSlice.actions
export const selectProfile=(state : AppState)=>state.profile
export default ProfileSlice.reducer