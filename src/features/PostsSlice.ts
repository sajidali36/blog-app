import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../Types';

export const fetchPosts: any = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts;
});

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    savePost: (state, action: PayloadAction<Post>) => {
      const post = action.payload;
      if (post.id) {
        state.posts = state.posts.map((p) => (p.id === post.id ? post : p));
      } else {
        const newPost = { ...post, id: Date.now() };
        state.posts.push(newPost);
      }
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const { savePost, deletePost } = PostsSlice.actions;

export default PostsSlice.reducer;
