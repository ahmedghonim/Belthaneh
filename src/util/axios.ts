/* eslint-disable camelcase */
import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL
export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json'
  },
  withCredentials: true
})
