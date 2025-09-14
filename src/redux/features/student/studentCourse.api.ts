import { baseApi } from "../../api/baseApi";

const studentCourseApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
       getMyOfferedCourseData:builder.query({
        query:()=>{
            return {
                url:'/offered-course/my-offered-courses',
                method:'GET'
            }
        }
      }),

       enrolledOfferedCourse:builder.mutation({
        query:(data)=>{
           
            return {
                url:'/enrolledCourse/create-enrolled-course',
                method:'POST',
                body:data
            }
        }
      })

    })
})

export const {useGetMyOfferedCourseDataQuery,
    useEnrolledOfferedCourseMutation,
}=studentCourseApi