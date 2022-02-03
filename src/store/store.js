import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from './redditSlice';
import commentReducer from './commentSlice';
import subredditReducer from './subredditSlice';

export const store = configureStore({
  reducer: combineReducers({
    reddits: redditReducer,
    comments: commentReducer,
    subreddits: subredditReducer,
  }),
});
