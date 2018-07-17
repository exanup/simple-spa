import http from '../utils/http'

export async function login (body) {
  const { data } = await http.post('/auth/login', body)
  // debug
  return data
}

export async function logout () {
  const requestBody = {
    accessToken: localStorage.accessToken,
    refreshToken: localStorage.refreshToken
  }
  const { data } = await http.post('/auth/logout', requestBody)
  // debug
  return data
}

export async function register (body) {
  const { data } = await http.post('/register', body)
  return data
}
