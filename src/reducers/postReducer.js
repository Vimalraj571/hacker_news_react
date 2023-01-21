import { createSlice } from '@reduxjs/toolkit'
import postService from '../services/post'

const initialState = { posts: [], singlePost: {} }

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    appendPosts(state, action) {
      return { ...state, posts: action.payload.hits }
    },
    setSinglePost(state, action) {
      return { ...state, singlePost: action.payload }
    }
  }
})

export const getAllPostsByQuery = (searchQuery) => {
  return async (dispatch) => {
    try {
      const postList = await postService.getAll(searchQuery)
      dispatch(appendPosts(postList))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getPostById = (postId) => {
  return async (dispatch) => {
    try {
      const post = await postService.getPostById(postId)
      dispatch(setSinglePost(post))
    } catch (error) {
      console.log(error)
    }
  }
}

export const { appendPosts, setSinglePost } = postSlice.actions

export default postSlice.reducer