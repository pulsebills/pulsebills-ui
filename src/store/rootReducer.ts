import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "@/pages/Login/reducer";

export const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
});