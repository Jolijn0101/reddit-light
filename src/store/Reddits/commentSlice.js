import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPostComments } from '../../api/reddit';

// moet nog in werking stellen in Article page
export const fetchAsynccomments = createAsyncThunk(
  'comments/fetchAsynccomments',
  async (permalink) => {
    const comments = await getPostComments(permalink);
    return comments;
  }
);

const initialState = {
  comments: false, //komt een array met comments
  commentsLoading: false,
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsynccomments.pending]: (state) => {
      console.log('Pending');
      return { ...state, commentsLoading: true };
    },
    [fetchAsynccomments.fulfilled]: (state, action) => {
      console.log('Fetched Successfully');
      return { ...state, comments: action.payload, commentsLoading: false };
    },
    [fetchAsynccomments.rejected]: () => {
      console.log('rejected');
    },
  },
});

export const getComments = (state) => state.comments.comments;
export const getCommentsLoading = (state) => state.comments.commentsLoading;
export default commentSlice.reducer;
