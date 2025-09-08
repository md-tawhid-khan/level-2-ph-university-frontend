import type {  TQueryParams, TResponseRedux } from "../../../types"
import type { TAcademicDepartment, TAcademicFaculty, TAcademicSemesterData } from "../../../types/academicManagement.type"
import { baseApi } from "../../api/baseApi"

const academicManagementApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
 //academic semester part     
       getAcademicSemester:builder.query({
       query:(args)=>{

         const params=new URLSearchParams()
         if(args){
            args.forEach((item:TQueryParams) => {
                params.append(item.name,item.value as string)
            });        
         }

        return {
             url:"academic-semesters",
          method:"GET",
          params: params
         }
       
       },
       transformResponse:(response:TResponseRedux<TAcademicSemesterData[]>)=>{
           
            return {
               data:response.data,
               meta:response.meta,
            }
           }
       }),

       addAcademicSemester:builder.mutation({
       query:(data)=>({
        url:"/academic-semesters/create-academic-semester",
          method:"POST",
          body:data
       })    
       }),

//academic faculty part

        getAcademicFaculty:builder.query({
       query:(args)=>{

         const params=new URLSearchParams()
         if(args){
            args.forEach((item:TQueryParams) => {
                params.append(item.name,item.value as string)
            });        
         }

        return {
             url:"academic-faculties",
          method:"GET",
          params: params
         }
       
       },
       transformResponse:(response:TResponseRedux<TAcademicFaculty[]>)=>{
           
            return {
               data:response.data,
               meta:response.meta,
            }
           }
       }),

       addAcademicFaculty:builder.mutation({
       query:(data)=>({
        url:"/academic-faculties/create-academic-faculty",
          method:"POST",
          body:data
       })    
       }),

// academic department  part

        getAcademicDepartment:builder.query({
       query:(args)=>{

         const params=new URLSearchParams()
         if(args){
            args.forEach((item:TQueryParams) => {
                params.append(item.name,item.value as string)
            });        
         }

        return {
             url:"academic-department",
          method:"GET",
          params: params
         }
       
       },
       transformResponse:(response:TResponseRedux<TAcademicDepartment[]>)=>{
           
            return {
               data:response.data,
               meta:response.meta,
            }
           }
       }),

       addAcademicDepartment:builder.mutation({
       query:(data)=>({
        url:"/academic-department/create-academic-department",
          method:"POST",
          body:data
       })    
       })
    }),
})

export const {
   useGetAcademicSemesterQuery,
   useAddAcademicSemesterMutation,
   useAddAcademicFacultyMutation,
   useGetAcademicFacultyQuery,
   useAddAcademicDepartmentMutation,
   useGetAcademicDepartmentQuery,
}=academicManagementApi ;