import type { TResponseRedux } from "../../../types"
import type { TAcademicSemesterData } from "../../../types/academicManagement.type"
import { baseApi } from "../../api/baseApi"

const academicManagementApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
       getAcademicSemester:builder.query({
       query:()=>({
        url:"academic-semesters",
          method:"GET",
       }),
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
       })
    }),
})

export const {useGetAcademicSemesterQuery,useAddAcademicSemesterMutation}=academicManagementApi