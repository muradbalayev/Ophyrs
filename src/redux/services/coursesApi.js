import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';



// Create the API
export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getCourses: builder.query({
            query: () => 'api/admin/courses',
            providesTags: ['Course'],
        }),
        deleteCourse: builder.mutation({
            query: (id) => ({
                url: `api/admin/courses/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Course'], // Invalidate 'Course' to refetch course list after deletion
        }),
        addCourse: builder.mutation({
            query: (formData) => ({
                url: 'api/admin/courses',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Course'],
        }),
        editCourse: builder.mutation({
            query: ({ courseId, formData }) => {
              return {
                url: `api/admin/courses/${courseId}`,
                method: 'PUT',
                body: formData,
              };
            },
            invalidatesTags: ['Course'],
          }),
          orderSyllabusCourse: builder.mutation({
            query: (data) => {
              return {
                url: `api/admin/courses/syllabus/order`,
                method: 'PUT',
                body: data,
              };
            },
            invalidatesTags: ['Course'],
          }),

    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetCoursesQuery, useDeleteCourseMutation, useAddCourseMutation, useEditCourseMutation, useOrderSyllabusCourseMutation } = coursesApi;
