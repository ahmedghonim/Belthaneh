import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

import { RootState } from 'redux/store'

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token !== null) {
      headers.set('authorization', `Bearer ${token as string}`)
    }
    return headers
  }
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({})
})
