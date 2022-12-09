import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import profileReducer from "./slice/profile";
import authSlice from "./slice/authSlice";
import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      profile: profileReducer,
      auth: authSlice
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
