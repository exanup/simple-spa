import http from '../utils/http'

export async function fetchPosts () {
  const props = localStorage.accessToken
    ? {
      headers: {
        Authorization: localStorage.accessToken
      }
    }
    : null

  const { data } = await http.get('/posts', props)
  // debug
  return data
}

export async function fetchPost (postId) {
  const props = localStorage.accessToken
    ? {
      headers: {
        Authorization: localStorage.accessToken
      }
    }
    : null

  console.log('Trying to fetch post with id', postId)
  const { data } = await http.get('/posts/' + postId, props)
  // debug
  return data
}

export async function addPost (post) {
  const props = localStorage.accessToken
    ? {
      headers: {
        Authorization: localStorage.accessToken
      }
    }
    : null

  console.log('Trying to add new post.', props)
  const { data } = await http.post('/posts', post, props)
  // debug
  return data
}

export async function deletePost (postId) {
  const props = localStorage.accessToken
    ? {
      headers: {
        Authorization: localStorage.accessToken
      }
    }
    : null

  console.log(`Trying to delete post with ID ${postId}.`, props)
  const { data } = await http.delete(`/posts/${postId}`, props)
  // debug
  return data
}

export async function editPost (postId, formData) {
  const headers = { Authorization: localStorage.accessToken }

  console.log(`Trying to edit post with ID ${postId}.`)
  console.log(`/posts/${postId}`, formData, { headers })
  const { data } = await http.put(`/posts/${postId}`, formData, { headers })
  // debug
  return data
}
