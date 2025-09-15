import type { TQueryParams, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const facultyCourseApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
       getCoursesData: builder.query({
             query: (args) => {
               const params = new URLSearchParams();
               if (args) {
                 args.forEach((item: TQueryParams) => {
                   params.append(item.name, item.value as string);
                 });
               }
       
               return {
                 url: "/enrolledCourse/my-faculty-courses",
                 method: "GET",
                 params: params,
               };
             },
             transformResponse: (response: TResponseRedux<any>) => {
               return {
                 data: response.data,
                 meta: response.meta,
               };
             },
           }),

       getAllStudentInCourseData: builder.query({
             query: (args) => {
               const params = new URLSearchParams();
               if (args) {
                 args.forEach((item: TQueryParams) => {
                   params.append(item.name, item.value as string);
                 });
               }
       
               return {
                 url: "/enrolledCourse/get-allStudent-faculty-courses",
                 method: "GET",
                 params: params,
               };
             },
             transformResponse: (response: TResponseRedux<any>) => {
               return {
                 data: response.data,
                 meta: response.meta,
               };
             },
           }),



    //    enrolledOfferedCourse:builder.mutation({
    //     query:(data)=>{
           
    //         return {
    //             url:'/enrolledCourse/create-enrolled-course',
    //             method:'POST',
    //             body:data
    //         }
    //     },
    //     invalidatesTags:['offeredCourse']
    //   }),


      
        
    })
})

export const {
   useGetCoursesDataQuery,
   useGetAllStudentInCourseDataQuery,
}=facultyCourseApi ;