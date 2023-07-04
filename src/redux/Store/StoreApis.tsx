

import { ApiGetCategoryProduk, pokemonApi } from '@/Service/Api/Apis';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const StoreForPokemon = configureStore({
    reducer:{
        [pokemonApi.reducerPath] : pokemonApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

export const StoreForCategory = configureStore({
    reducer:{
        [ApiGetCategoryProduk.reducerPath] : ApiGetCategoryProduk.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(ApiGetCategoryProduk.middleware)
});

setupListeners(StoreForPokemon.dispatch);
setupListeners(StoreForCategory.dispatch)

