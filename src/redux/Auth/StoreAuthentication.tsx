

import { configureStore } from "@reduxjs/toolkit"
import AppStoreAuth from "./AppStoreAuth"

export const StoreAuth = configureStore({
    reducer:{
        counter: AppStoreAuth
    }
});
export type RootState = ReturnType<typeof StoreAuth.getState>
export type AppDispatch = typeof StoreAuth.dispatch