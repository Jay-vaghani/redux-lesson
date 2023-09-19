import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  post: [],
  status: "idle",
  error: null,
};

export const fetchPost = createAsyncThunk("/post/fetchPost", async () => {
  const response = await axios(POST_URL);
  return [...response.data];
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.post.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            reaction: {
              thumbsUp: 0,
              wow: 0,
              hart: 0,
              rocket: 0,
            },
          },
        };
      },
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.post.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reaction[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "success";
        const loadedPost = action.payload.map((post) => {
          post.reaction = {
            thumbsUp: 0,
            wow: 0,
            hart: 0,
            rocket: 0,
          };
          return post;
        });

        state.post = state.post.concat(loadedPost);
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllPost = (state) => state.post.post;
export const getPostStatus = (state) => state.post.status;
export const getPostErrors = (state) => state.post.error;

export const { addPost, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
