import axios from 'axios'
const baseUrl = 'https://hn.algolia.com/api/v1/'

// http://hn.algolia.com/api/v1/search?query=test
// http://hn.algolia.com/api/v1/items/12701272

const getAll = (query) => {
  const request = axios.get(`${baseUrl}search?query=${query}`)
  return request.then((response) => response.data)
}

const getPostById = async (postId) => {
  console.log("CALEDONG")
  const response = await axios.get(baseUrl + `items/${postId}`)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, getPostById }