import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/rootReducer';
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => 
  configureStore({
  reducer: {
    rootReducer: movieReducer,
  },
  devTools: true,
});

export const wrapper = createWrapper(makeStore);