import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const repositoriesApi = createApi({
  reducerPath: 'repositoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    getRepoSortedByStars: builder.query({
      query: (perPage) => `search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc&per_page=${perPage}&page=1`,
    }),
    getReposWithFilters: builder.query({
      query: ({ date, language }) => `search/repositories?q=created:%3E${date || "2019-01-10"}${language ? `+language:${language}` : ""}&order=desc`,
    })
  }),
})
export const { useGetRepoSortedByStarsQuery, useGetReposWithFiltersQuery } = repositoriesApi