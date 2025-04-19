import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';



// Create the API
export const diplomaApi = createApi({
    reducerPath: 'diplomaApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getDiplomas: builder.query({
            query: () => 'api/admin/diplomas',
            providesTags: ['Diploma'],
        }),
        deleteDiploma: builder.mutation({
            query: (id) => ({
                url: `api/admin/diplomas/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Diploma'], // Invalidate 'Event' to refetch event list after deletion
        }),
        addDiploma: builder.mutation({
            query: (formData) => ({
                url: 'api/admin/diplomas',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Diploma'],
        }),
        editDiploma: builder.mutation({
            query: ({ diplomaId, data }) => {
              return {
                url: `api/admin/diplomas/${diplomaId}`,
                method: 'PUT',
                body: data,
              };
            },
            invalidatesTags: ['Diploma'],
          }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetDiplomasQuery, useDeleteDiplomaMutation, useAddDiplomaMutation, useEditDiplomaMutation } = diplomaApi;
