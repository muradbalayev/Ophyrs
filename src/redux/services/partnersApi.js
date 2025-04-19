import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';

// Create the API
export const partnersApi = createApi({
    reducerPath: 'partnersApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getPartners: builder.query({
            query: () => 'api/admin/partners',
            providesTags: ['Partner'],
        }),
        deletePartner: builder.mutation({
            query: (id) => ({
                url: `api/admin/partners/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Partner'],
        }),
        addPartner: builder.mutation({
            query: (formData) => ({
                url: 'api/admin/partners',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Partner'],
        }),
        editPartner: builder.mutation({
            query: ({ partnerId, formData }) => {
                return {
                    url: `api/admin/partners/${partnerId}`,
                    method: 'PUT',
                    body: formData,
                };
            },
            invalidatesTags: ['Partner'],
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetPartnersQuery, useDeletePartnerMutation, useAddPartnerMutation, useEditPartnerMutation } = partnersApi;
