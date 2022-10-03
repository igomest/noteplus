import axios from 'axios'

const token = localStorage.getItem('token')

export const api = axios.create({
  baseURL: 'https://api-nodejs-todolist.herokuapp.com'
})

if (token) {
  api.defaults.headers.common.Authorization = token
}
