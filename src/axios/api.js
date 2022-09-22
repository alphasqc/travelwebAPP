import axios from 'axios'

// export const http = axios.create({
//   baseURL: 'http://localhost:3000/'
// })

const baseURL = 'http://localhost:3000/'

export function getHome (url) {
  return axios.get(`${baseURL}${url}`)
}

export default {
  getHome
}
