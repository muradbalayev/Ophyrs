import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';



// Create the API
export const graduatesApi = createApi({
    reducerPath: 'graduatesApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getGraduates: builder.query({
            query: () => 'api/admin/graduates',
            providesTags: ['Graduate'],
        }),
        deleteGraduate: builder.mutation({
            query: (id) => ({
                url: `api/admin/graduates/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Graduate'], // Invalidate 'Graduate' to refetch graduate list after deletion
        }),
        addGraduate: builder.mutation({
            query: (formData) => ({
                url: 'api/admin/graduates',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Graduate'],
        }),
        editGraduate: builder.mutation({
            query: ({ graduateId, formData }) => {
              return {
                url: `api/admin/graduates/${graduateId}`,
                method: 'PUT',
                body: formData,
              };
            },
            invalidatesTags: ['Graduate'],
          }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetGraduatesQuery, useDeleteGraduateMutation, useAddGraduateMutation, useEditGraduateMutation } = graduatesApi;
