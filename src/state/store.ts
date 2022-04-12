import { configureStore } from "@reduxjs/toolkit";
import home from "../pages/HomePage/Home.slice"

const middlewareConfiguration = { serializableCheck: false }

export const store = configureStore({
    reducer: { home },
    devTools: {
        name: 'NotePlus'
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfiguration)
})

export type State = ReturnType<typeof store.getState>