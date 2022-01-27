import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSubredditPosts } from '../../api/reddit';

export const fetchAsyncReddits = createAsyncThunk(
  'reddits/fetchAsyncReddits',
  async (subreddit) => {
    const posts = await getSubredditPosts(subreddit);
    return posts;
  }
);

const initialState = {
  reddits: false,
  selectedReddit: {},
  loading: false,
};

const redditSlice = createSlice({
  name: 'reddits',
  initialState,
  reducers: {
    removeSelectedReddit: (state) => {
      state.selectedReddit = {};
    },
    firstConsolelock: (state) => {
      console.log('hij doet het');
    },
  },
  extraReducers: {
    [fetchAsyncReddits.pending]: (state) => {
      console.log('Pending');
      return { ...state, loading: true };
    },
    [fetchAsyncReddits.fulfilled]: (state, action) => {
      console.log('Fetched Successfully');
      return { ...state, reddits: action.payload, loading: false };
    },
    [fetchAsyncReddits.rejected]: () => {
      console.log('rejected');
    },
  },
});

export const { removeSelectedReddit, firstConsolelock } = redditSlice.actions;
export const getAllReddits = (state) => state.reddits.reddits;
export const getLoading = (state) => state.reddits.loading;
export const getSelectedReddit = (state) => state.reddits.selectedReddit;
export default redditSlice.reducer;
