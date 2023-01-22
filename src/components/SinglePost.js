import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getPostById } from '../reducers/postReducer'

const SinglePost = ({ post }) => {
  const dispatch = useDispatch()

  const handleTitleClick = (post) => {
    dispatch(getPostById(post.objectID))
  }

  return (
    <>
      <div
        className="card lg:card-side shadow-md m-2 mr-14 ml-14"
        onClick={() => {
          handleTitleClick(post)
        }}
      >
        <h2 className="card-title p-4">
          <Link to={`/post/${post.objectID}`}>{post.title} </Link>
          <span className="text-sm">by</span>
          <div style={{ fontWeight: 700 }}>{post.author}</div>
        </h2>
      </div>
    </>
  )
}

export default SinglePost
