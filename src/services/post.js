import axios from 'axios'
const baseUrl = 'https://hn.algolia.com/api/v1/'

// http://hn.algolia.com/api/v1/search?query=test
// http://hn.algolia.com/api/v1/items/12701272

const getAll = (query) => {
  const request = axios.get(`${baseUrl}search?query=${query}`)
  return request.then((response) => response.data)
}

const getPostById = async (postId) => {
  const response = await axios.get(baseUrl + `items/${postId}`)
  return response.data
}

export default { getAll, getPostById }