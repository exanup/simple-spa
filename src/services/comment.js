import http from '../utils/http'

export async function addComment (comment) {
  const props = localStorage.accessToken
    ? {
      headers: {
        Authorization: localStorage.accessToken
      }
    }
    : null

  console.log('Trying to add new comment.', props)
  const { data } = await http.post('/comments', comment, props)
  // debug
  return data
}

export async function deleteComment (commentId) {
  const props = localStorage.accessToken
    ? {
      headers: {
        Authorization: localStorage.accessToken
      }
    }
    : null

  console.log(`Trying to delete comment with ID ${commentId}.`, props)
  const { data } = await http.delete(`/comments/${commentId}`, props)
  // debug
  return data
}

export async function editComment (commentId, formData) {
  const headers = { Authorization: localStorage.accessToken }

  console.log(`Trying to edit comment with ID ${commentId}.`)
  console.log(`/comments/${commentId}`, formData, { headers })
  const { data } = await http.put(`/comments/${commentId}`, formData, { headers })
  // debug
  return data
}
