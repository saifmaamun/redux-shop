import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComents: builder.query({
      query: (id) => ({
        url: `/comment/${id}`,
      }),
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetComentsQuery,
  useGetProductsQuery,
  useGetSingleProductQuery,
  usePostCommentMutation,
} = productApi;
