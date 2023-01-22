import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'

import ViewPost from './components/ViewPost'
import ListPost from './components/ListPost'
import { getAllPostsByQuery } from './reducers/postReducer'


function App() {
  const tempPostDetails = useSelector(state => state.post.singlePost)
  const dispatch = useDispatch()

  const debounced = useDebouncedCallback((query) => {
    if (Object.keys(tempPostDetails).length === 0
      && tempPostDetails.constructor === Object) {
      dispatch(getAllPostsByQuery(query))
    }
  }, 1000)

  const navigateHome = () => {
    window.location.replace('/')
  }

  return (
    <div className="container mx-auto bg-orange-100 text-black">
      <div className="navbar bg-orange-600">
        <div className="navbar-start" onClick={() => navigateHome()}>
          <a className="btn btn-ghost normal-case text-xl">Hacker News</a>
        </div>
        <div className="navbar-center">
          <input
            type="text"
            placeholder="Enter Search Query Here"
            className="input input-bordered w-full text-white"
            onChange={(e) => {
              debounced(e.target.value)
            }}
          />
        </div>
        <div className="navbar-end"></div>
      </div>
      <Router>
        <Routes>
          <Route path="/post/:id" element={<ViewPost />} />
          <Route exact path="/" element={<ListPost />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
