
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { config } from '../../../config';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints:(builder) =>({
        getPokemonByName: builder?.query({
            query:(name) => `pokemon/${name}`
        }),
    })
});

export const ApiGetCategoryProduk = createApi({
    reducerPath: 'ApiGetCategoryProduk',
    baseQuery: fetchBaseQuery({
        baseUrl: config.API_URL,
        method: 'GET',
        headers:{
            'Content-type' : 'application/json',
        },
    }),

    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
          return action.payload[reducerPath]
        }
      },

    tagTypes: ['ListCategory'],
    
    endpoints:(builder) => ({
        getCategoryProduk: builder?.query({
            query:(name) => `dropshiper/${name}`,
            providesTags: ['ListCategory']
        }),
    })
})

export const { useGetPokemonByNameQuery }  = pokemonApi;
export const { useGetCategoryProdukQuery } = ApiGetCategoryProduk