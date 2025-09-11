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
    }),

    addSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "/semester-registerations/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),

  }),
});

export const {useAddSemesterRegistrationMutation,
    useUpdateSemesterRegistrationMutation,
    useGetRegisteredSemesterDataQuery,
}=courseManagementApi