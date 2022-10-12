import axios from 'axios'

// export const http = axios.create({
//   baseURL: 'http://localhost:3000/'
// })

const baseURL = 'http://localhost:3000/'

export function getHome (url) {
  return axios.get(`${baseURL}${url}`)
}

export function foundData (url, foundtext) {
  return axios.get(`${baseURL}${url}?name_like=${foundtext}`)
}

export function getOrder (url, ordertype) {
  return axios.get(`${baseURL}${url}?type_like=${ordertype}`)
}

export function getMain (url, id) {
  return axios.get(`${baseURL}${url}/${id}`)
}

export default {
  getHome,
  foundData,
  getMain,
  getOrder
}
