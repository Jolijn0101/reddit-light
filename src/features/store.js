import { configureStore } from '@reduxjs/toolkit';
import redditReducer from './Reddits/redditSlice';

export const store = configureStore({
  reducer: {
    reddits: redditReducer,
  },
});
