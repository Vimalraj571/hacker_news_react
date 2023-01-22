import Comment from './Comment'
import { useSelector } from 'react-redux'

const ViewPost = () => {
  const postDetails = useSelector((state) => state.post.singlePost)
  return (
    <div className="m-10 p-3 mt-0">
      <div
        className="flex text-xl"
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >Post detail with Comments
      </div>
      <div className="m-5 underline">
        {Object.keys(postDetails).length === 0 ? null : <div><a href={postDetails.url}>Title : {postDetails.title}</a> | points : {postDetails.points}</div>}
      </div>
      <Comment comment={postDetails} />
    </div>
  )
}

export default ViewPost
