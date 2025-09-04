import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";


type TInitislState={
    user:null | string,
   token:null | string
}

const initialState:TInitislState={
    user:null,
    token:null
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
           const {user,token}=action.payload ;
           state.user=user ;
           state.token=token ;
        },
        logOut:(state)=>{
            state.user=null ;
            state.token=null
        }
    }
})

export const {setUser,logOut}=authSlice.actions ;

export const useCurrentToken=(state:RootState)=>state.auth.token ;
export const useCurrentUser=(state:RootState)=>state.auth.user ;

export default authSlice.reducer

