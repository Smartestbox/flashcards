import { baseApi } from '@/services/baseApi'
import {
  CreateDeckArgs,
  Deck,
  DeckWithoutAuthor,
  DecksMinMaxCardsResponse,
  DecksResponse,
  GetDecksArgs,
} from '@/services/decks/decks.types'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: body => ({
          body,
          method: 'POST',
          url: 'v1/decks',
        }),
      }),
      deleteDeck: builder.mutation<DeckWithoutAuthor, string>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<DecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? {},
          url: 'v2/decks',
        }),
      }),
      getMinMaxCards: builder.query<DecksMinMaxCardsResponse, void>({
        query: () => 'v2/decks/min-max-cards',
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} = decksService
