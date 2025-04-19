import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';

// Create the API
export const instructorApi = createApi({
    reducerPath: 'instructorApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getInstructors: builder.query({
            query: () => 'api/admin/instructors',
            providesTags: ['Instructor'],
        }),
        deleteInstructor: builder.mutation({
            query: (id) => ({
                url: `api/admin/instructors/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Instructor'], // Invalidate 'Instructor' to refetch instructor list after deletion
        }),
        addInstructor: builder.mutation({
            query: (formData) => ({
                url: 'api/admin/instructors',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Instructor'],
        }),
        editInstructor: builder.mutation({
            query: ({ instructorId, formData }) => {
              return {
                url: `api/admin/instructors/${instructorId}`,
                method: 'PUT',
                body: formData,
              };
            },
            invalidatesTags: ['Instructor'],
          }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetInstructorsQuery, useDeleteInstructorMutation, useAddInstructorMutation, useEditInstructorMutation } = instructorApi;
