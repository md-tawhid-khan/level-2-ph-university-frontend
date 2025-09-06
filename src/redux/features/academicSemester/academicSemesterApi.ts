import { baseApi } from "../../api/baseApi";

const AcademicSemesterApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
       getAcademicSemester:builder.query({
       query:()=>({
        url:"academic-semesters",
          method:"GET",
       })    
       })
    }),
})

export const {useGetAcademicSemesterQuery}=AcademicSemesterApi ;