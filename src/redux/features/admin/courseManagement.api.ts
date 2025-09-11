import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getStudentData: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args.forEach((item: TQueryParams) => {
    //         params.append(item.name, item.value as string);
    //       });
    //     }

    //     return {
    //       url: "/students/all-students",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TStudent[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),

    // getSpecificStudentUser: builder.query({
    //   query: (name) => ({
    //     url: `/students/${name}`,
    //     method: "GET",
    //   }),
    // }),

    addSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "/semester-registerations/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),

    
   
   

   
  }),
});

export const {useAddSemesterRegistrationMutation}=courseManagementApi