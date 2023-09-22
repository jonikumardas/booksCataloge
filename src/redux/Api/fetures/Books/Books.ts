import { apiSlice } from "../../ApiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    postRevew: builder.mutation({
      query: ({ _id, data }) => ({
        url: `review/${_id}`,
        method: "POST",
        body: data, 
      }),
      invalidatesTags: ['comments']
    }),

    getRevew: builder.query({
      query: (_id) => `review/${_id}`,
      providesTags:["comments"]
    }),

    getCount: builder.query({
      query: () => "/count-book",
    }),
  }),
});
export const { useGetBooksQuery, useGetCountQuery,usePostRevewMutation,useGetRevewQuery } = bookApi;
