import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';



// Create the API
export const extraApi = createApi({
    reducerPath: 'extraApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getVacancyApplies: builder.query({
            query: (currentPage) => ({
                url: 'api/admin/extra/vacancy-applications',
                params: {
                    page: currentPage,
                    limit: 20
                },
            })
        }),
        getCourseApplies: builder.query({
            query: ({currentPage, applicationType}) => ({
                url: 'api/admin/extra/course-applications',
                params: {
                    page: currentPage,
                    limit: 20,
                    applicationType: applicationType,
                },
            })
        }),
        
        
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetCourseAppliesQuery, useGetVacancyAppliesQuery } = extraApi;
