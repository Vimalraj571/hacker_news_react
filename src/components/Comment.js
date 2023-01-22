import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import parse from 'html-react-parser'

import { getPostById } from '../reducers/postReducer'

const Comment = ({ comment }) => {
  let commentsList = ''
  const dispatch = useDispatch()
  const id = useParams().id

  useEffect(() => {
    if (Object.keys(comment).length === 0 && comment.constructor === Object) {
      if (id) {
        dispatch(getPostById(id))
      }
    }
  }, [comment, dispatch, id])

  if (Object.keys(comment).length === 0 && comment.constructor === Object) {
    return (
      <div
        className="flex text-xl"
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
                Loading...
      </div>
    )
  }
  if (comment.children) {
    commentsList = comment.children.map((c) => (
      <Comment comment={c} key={c.id}>
        <span>{c.text}</span>
      </Comment>
    ))
  }
  return (
    <div className="ml-1 mt-2 text-xs break-normal">
      <div
        style={{ borderRadius: 0 }}
        className="break-all card shadow-md p-4 shadow-xl"
      >
        <h3 className="font-semibold">
          {' Author | '}
          {comment.author}
        </h3>
        <span>
          {typeof comment.text === 'object'
            ? 'Post Author'
            : parse(comment.text)}
        </span>
      </div>
      {commentsList}
    </div>
  )
}

export default Comment
