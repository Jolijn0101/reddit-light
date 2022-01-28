import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getSubredditPosts,
  getSubreddits,
  getSearchReddits,
} from '../../api/reddit';

export const fetchAsyncReddits = createAsyncThunk(
  'reddits/fetchAsyncReddits',
  async (reddit) => {
    const posts = await getSubredditPosts(reddit);
    return posts;
  }
);

export const fetchAsyncSubReddits = createAsyncThunk(
  'reddits/fetchAsyncSubReddits',
  async (subreddit) => {
    const subreddits = await getSubreddits(subreddit);
    return subreddits;
  }
);

export const fetchAsyncSearchReddits = createAsyncThunk(
  'reddits/fetchAsyncSearchReddits',
  async (searchterm) => {
    const searchResults = await getSearchReddits(searchterm);
    return searchResults;
  }
);

const initialState = {
  reddits: false, //komt een array met reddits
  selectedReddit: {},
  redditsLoading: false,

  subreddits: false, // komt een array met subreddits
  subRedditsLoading: false,
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
    // reddits
    [fetchAsyncReddits.pending]: (state) => {
      console.log('Pending');
      return { ...state, redditsLoading: true };
    },
    [fetchAsyncReddits.fulfilled]: (state, action) => {
      console.log('Fetched Successfully');
      return { ...state, reddits: action.payload, redditsLoading: false };
    },
    [fetchAsyncReddits.rejected]: () => {
      console.log('rejected');
    },
    // subreddits
    [fetchAsyncSubReddits.pending]: (state) => {
      console.log('Pending');
      return { ...state, subRedditsLoading: true };
    },
    [fetchAsyncSubReddits.fulfilled]: (state, action) => {
      console.log('Fetched Successfully');
      return { ...state, subreddits: action.payload, subRedditsLoading: false };
    },
    [fetchAsyncSubReddits.rejected]: () => {
      console.log('rejected');
    },
    // search reddits
    [fetchAsyncSearchReddits.pending]: (state) => {
      console.log('Pending');
      return { ...state, redditsLoading: true };
    },
    [fetchAsyncSearchReddits.fulfilled]: (state, action) => {
      console.log('Fetched Successfully');
      return { ...state, reddits: action.payload, redditsLoading: false };
    },
    [fetchAsyncSearchReddits.rejected]: () => {
      console.log('rejected');
    },
  },
});

//export reddits
export const { removeSelectedReddit, firstConsolelock } = redditSlice.actions;
export const getAllReddits = (state) => state.reddits.reddits;
export const getRedditLoading = (state) => state.reddits.redditsLoading;
export const getSelectedReddit = (state) => state.reddits.selectedReddit;

//export subreddits
export const getSubReddits = (state) => state.reddits.subreddits;
export const getSubLoading = (state) => state.reddits.subRedditsLoading;

export default redditSlice.reducer;
