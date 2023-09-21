import { apiSlice } from "../../ApiSlice";

const bookApi = apiSlice.injectEndpoints({
    endpoints:( builder) => ({
        getBooks: builder.query({
          query: () => '/books'
        }),
        getCount: builder.query({
          query: () => '/count-book'
        }),
    })
    
})
export const {useGetBooksQuery,useGetCountQuery} = bookApi;