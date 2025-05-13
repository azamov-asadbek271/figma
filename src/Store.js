import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/user/CreterUser";
export const store = configureStore({
    reducer: {
    user: userReducer,
    }
})