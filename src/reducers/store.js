import { configureStore } from '@reduxjs/toolkit'

import postReducer from './postReducer'

const store = configureStore({
  reducer: {
    post: postReducer,
  }
})

export default store
