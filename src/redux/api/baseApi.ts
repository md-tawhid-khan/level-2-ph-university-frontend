
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { logOut, setUser } from "../features/auth/authSlice";
import type { BaseQueryApi, BaseQueryFn, DefinitionType, FetchArgs } from "@reduxjs/toolkit/query";
import { toast } from "sonner";

const baseQuery=fetchBaseQuery({ 
        baseUrl: 'http://localhost:4003/api/v1',
        credentials:'include',
        prepareHeaders:(headers,{getState})=>{
           const token=(getState() as RootState).auth.token
           if(token){
            headers.set("authorization",`${token}`)
           }
           return headers
        }
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const baseQueryWithRefreshToken:BaseQueryFn<FetchArgs,BaseQueryApi,DefinitionType>=async(args , api , extraOption): Promise<any>=>{
        let result=await baseQuery(args,api,extraOption)

        if(result.error?.status ===404){
          
            toast.error(result.error.data.message)
           
        }

        if(result.error?.status === 401){
            console.log("sending refresh token")
            const res=await fetch('http://localhost:4003/api/v1/auth/refresh-token',{
                method:'POST',
                credentials:'include'
            })
              

            const data=await res.json()

            console.log({data})

            if(data?.data?.accessToken){

            const user=(api.getState() as RootState ).auth.user
            
            api.dispatch(setUser({
                user,
                token:data.data.accessToken
            }))

            result = await baseQuery(args,api,extraOption)
        } else{
           api.dispatch(logOut())
        }

        }
       return result
    } 

export const baseApi=createApi({
    reducerPath:"baseApi",
    baseQuery:baseQueryWithRefreshToken,
    tagTypes:['registerSemester','course','offeredCourse'],
    endpoints:()=>({})
})