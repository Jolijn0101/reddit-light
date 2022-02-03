import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

export const fetchAsyncSubReddits = createAsyncThunk(
  'subreddits/fetchAsyncSubReddits',
  async (subreddit) => {
    const subreddits = await getSubreddits(subreddit);
    return subreddits;
  }
);

const initialState = {
  subreddits: false, // komt een array met subreddits
  subRedditsLoading: false,
};

const subredditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {},
  extraReducers: {
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
  },
});

//export subreddits
export const getSubReddits = (state) => state.subreddits.subreddits;
export const getSubLoading = (state) => state.subreddits.subRedditsLoading;

export default subredditSlice.reducer;
