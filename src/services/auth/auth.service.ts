import { baseApi } from '@/services/baseApi'

const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<any, void>({
      query: () => ({
        url: 'v1/auth/me',
      }),
    }),
  }),
})

export const { useMeQuery } = authService
