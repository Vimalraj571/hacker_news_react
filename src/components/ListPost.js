import { useSelector } from 'react-redux'
import SinglePostCard from './SinglePostCard'

const ListPost = () => {
  const postList = useSelector((state) => state.post.posts)

  return (
    <div className="p-2">
      {postList.length === 0 ? (
        <div
          className="flex p-20"
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <div>Search Any Post in the input Field</div>
        </div>
      ) : (
        <>
          <div className="p-5 ml-10">
            <div className="flex text-xl" style={{ alignItems: 'center', justifyContent: 'center' }}>List of post matched with the search query</div>
          </div>
          {postList.map((p) => (
            <SinglePostCard post={p} key={p.objectID}>
              {p.title}
            </SinglePostCard>
          ))}
        </>
      )}
    </div>
  )
}

export default ListPost
