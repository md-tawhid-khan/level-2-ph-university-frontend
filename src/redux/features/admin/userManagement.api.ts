import type { TFaculty, TQueryParams, TResponseRedux, TStudent } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getStudentData:builder.query({
               query:(args)=>{
        
                 const params=new URLSearchParams()
                 if(args){
                    args.forEach((item:TQueryParams) => {
                        params.append(item.name,item.value as string)
                    });        
                 }
        
                return {
                     url:"/students/all-students",
                  method:"GET",
                  params: params
                 }
               
               },
               transformResponse:(response:TResponseRedux<TStudent[]>)=>{
                   
                    return {
                       data:response.data,
                       meta:response.meta,
                    }
                   }
               }),

        getSpecificStudentUser:builder.query({
            query:(name)=>({
              url:`/students/${name}`,
              method:'GET',
            })
        }),

        addStudentUser:builder.mutation({
            query:(data)=>({
              url:'/users/create-user-student',
              method:'POST',
              body:data
            })
        }),

        getFacultyData:builder.query({
               query:(args)=>{
        
                 const params=new URLSearchParams()
                 if(args){
                    args.forEach((item:TQueryParams) => {
                        params.append(item.name,item.value as string)
                    });        
                 }
        
                return {
                     url:"/faculties",
                  method:"GET",
                  params: params
                 }
               
               },
               transformResponse:(response:TResponseRedux<TFaculty[]>)=>{
                   
                    return {
                       data:response.data,
                       meta:response.meta,
                    }
                   }
               }),

                getSpecificFacultyUser:builder.query({
            query:(name)=>({
              url:`/faculties/${name}`,
              method:'GET',
            })
        }),

        addFacultyUser:builder.mutation({
            query:(data)=>({
              url:'/users/create-user-faculty',
              method:'POST',
              body:data
            })
        }),
    })
})

export const {useGetStudentDataQuery,
    useGetSpecificStudentUserQuery,
    useAddStudentUserMutation,
    useGetFacultyDataQuery,
    useGetSpecificFacultyUserQuery,
  useAddFacultyUserMutation}=userManagementApi