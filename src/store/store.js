import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from './Reddits/redditSlice';
import commentReducer from './Reddits/commentSlice';

export const store = configureStore({
  reducer: combineReducers({
    reddits: redditReducer,
    comments: commentReducer,
  }),
});
