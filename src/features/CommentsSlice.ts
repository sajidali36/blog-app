import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from '../Types';


interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = {
  comments: [],
};

export const CommentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    saveComment: (state, action: PayloadAction<Comment>) => {
      const comment = action.payload;
      if (comment.id) {
        state.comments = state.comments.map((c) => (c.id === comment.id ? comment : c));
      } else {
        const newComment = { ...comment, id: Date.now() };
        state.comments.push(newComment);
      }
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    },
  },
});

export const { saveComment, deleteComment } = CommentsSlice.actions;

export default CommentsSlice.reducer;
