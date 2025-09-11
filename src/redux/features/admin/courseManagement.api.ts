import type { TQueryParams, TRegisteredSemester, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRegisteredSemesterData: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/semester-registerations",
          method: "GET",
          params: params,
        };
      },
      providesTags:['registerSemester'],
      transformResponse: (response: TResponseRedux<TRegisteredSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    updateSemesterRegistration: builder.mutation({
      query: (args) => ({
        url: `/semester-registerations/${args.id}`,
        method: "PATCH",
        body:args.data
      }),
      invalidatesTags:['registerSemester']
    }),

    addSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "/semester-registerations/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['registerSemester']
    }),

    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      providesTags:['course'],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

  addCourse: builder.mutation({
      query: (data) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['course']
    }),

  addFacultyInCourse: builder.mutation({
      query: (args) => ({
        url: `courses/${args.courseId}/assign-faculties`,
        method: "PUT",
        body: args.data,
      }),
     
    }),


  }),
});

export const {useAddSemesterRegistrationMutation,
    useUpdateSemesterRegistrationMutation,
    useGetRegisteredSemesterDataQuery,
    useGetAllCoursesQuery,
    useAddCourseMutation,
    useAddFacultyInCourseMutation,
}=courseManagementApi