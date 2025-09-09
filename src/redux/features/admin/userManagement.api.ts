import { baseApi } from "../../api/baseApi";

const userManagementApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        addStudentUser:builder.mutation({
            query:(data)=>({
              url:'/users/create-user-student',
              method:'POST',
              body:data
            })
        }),
    })
})

export const {useAddStudentUserMutation}=userManagementApi