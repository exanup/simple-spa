import http from '../utils/http'

export async function fetchPosts () {
  console.log('Trying to fetch posts...')
  const { data } = await http.get('/posts')
  // debug
  return data
}
