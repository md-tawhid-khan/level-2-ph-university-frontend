import { baseApi } from "../../api/baseApi";

const studentCourseApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
       getMyOfferedCourseData:builder.query({
        query:()=>{
            return {
                url:'/offered-course/my-offered-courses',
                method:'GET'
            }
        },
        providesTags:["offeredCourse"]
      }),



       enrolledOfferedCourse:builder.mutation({
        query:(data)=>{
           
            return {
                url:'/enrolledCourse/create-enrolled-course',
                method:'POST',
                body:data
            }
        },
        invalidatesTags:['offeredCourse']
      }),


      
        getAllEnrolledCourse:builder.query({
        query:()=>{
            return {
                url:'/enrolledCourse/my-enrolled-course',
                method:'GET'
            }
        },
      
      }),

    })
})

export const {
    useGetMyOfferedCourseDataQuery,
    useEnrolledOfferedCourseMutation,
    useGetAllEnrolledCourseQuery,
}=studentCourseApi ;