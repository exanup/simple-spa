import http from '../utils/http'

export async function fetchPosts () {
  console.log('Trying to fetch all posts...')
  const { data } = await http.get('/posts')
  // debug
  return data
}

export async function fetchPost (postId) {
  console.log('Trying to fetch post with id', postId)
  const { data } = await http.get('/posts/' + postId)
  // debug
  return data
}
