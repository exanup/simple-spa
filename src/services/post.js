import http from '../utils/http'

export async function fetchPosts () {
  const props = {
    headers: {
      Authorization: localStorage.accessToken
    }
  }
  const { data } = await http.get('/posts', props)
  // debug
  return data
}

export async function fetchPost (postId) {
  const props = {
    headers: {
      Authorization: localStorage.accessToken
    }
  }
  console.log('Trying to fetch post with id', postId)
  const { data } = await http.get('/posts/' + postId, props)
  // debug
  return data
}
